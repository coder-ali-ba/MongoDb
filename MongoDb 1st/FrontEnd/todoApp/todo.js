

const CurrentUser =JSON.parse(localStorage.getItem("CurrentUser"))

const CurrUser =document.getElementById("CurrUser")
CurrUser.innerHTML = `<h1>${CurrentUser[0].email}</h1>`;





const todoItem=document.getElementById("todoItem")
const todos =document.getElementById("todos")

// let listNo =0;
const getTodos = (async() => {
  try {
    const response =  await fetch("http://localhost:5050/getTodoList")
    let data = await response.json()
    console.log(data.data);
    const todoList = data.data
    todoList.map((item)=>{
    // console.log(item._id);
    const listId=item._id
      
      todos.innerHTML +=`
      <span id="spn">
         <div>
             <li id="lists"  class="${listId}">${item.dolist} </li>
         </div>

         <div id="delEle"  class="dis">
             <input   placeholder="enterId To delete">
         </div>
         <div>
             <i class="bi bi-x-lg"  onclick="delFun()"></i> 
         </div>
        
      
      </span>
       `;
    })  
  } catch (error) {
    console.log("fetching error");
    
  }
  
})()
// getTodos()

async function addto(){
  try {
    const todoData ={
      dolist : todoItem.value
     }
  
     const response = await fetch("http://localhost:5050/addToDO", {
      method :"POST",
      headers : {
          'Content-Type' : 'application/json'
      },
      body : JSON.stringify(todoData)
     });
  
  
     todos.innerHTML +=`
     <span id="spn">
        <div>
            <li id="lists">${todoItem.value} </li>
        </div>
        <div>
            <i class="bi bi-x-lg" id="Cut" onclick="delFun()"></i> 
        </div>
     
     </span>
      `;
  
      todoItem.innerHTML == ""
  } catch (error) {
    console.log("addTodo Err");
    
  }
   

}


// const editList = () =>{
//   const li = document.getElementById("lists")
//   const input = document.createElement("input");
//   input.type="text"

//   li.innerHTML = ""
//  li.appendChild(input);
 
  
// }
// const textEd=document.getElementsByClassName("editText")
// textEd.addEventListener("click", editList())




// const delEle=document.getElementById("delEle")
// const show = ()=>{
//   delEle.classList.remove("dis")
//  }

async function delFun(){
  try {
    document.getElementById("spn").style.display="none";

// console.log(li.classList);

    await fetch(`http://localhost:5050/deleteTodo/${delEle.value}`, {
      method: "DELETE", // Specify DELETE method
      headers: {
        "Content-Type": "application/json",
      },
    })
     .then(()=>{
      console.log("hogaya");
      
     })
li.addEventListener("click", ()=>{
 delEle.classList.remove("dis")
})
  } catch (error) {
    console.log("delERR");
    
  }


 }



