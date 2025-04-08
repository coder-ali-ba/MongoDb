

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
      <span id="spn" >
         <div>
             <li id="${listId}" class="allLists">${item.dolist} </li>
         </div>
         <div>
             <i class="bi bi-x-lg" id="CrossBTN"  onclick="delFun()"></i> 
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
            <li>${todoItem.value} </li>
        </div>
        <div>
            <i class="bi bi-x-lg" id="Cut" ></i> 
        </div>
     
     </span>
      `;
  
      todoItem.innerHTML == ""
  } catch (error) {
    console.log("addTodo Err");
    
  }
   

}




async function delFun() {
  const lists = document.getElementsByClassName("allLists");

  let listIndex = 0
  const response =  await fetch("http://localhost:5050/getTodoList")
  let data = await response.json()
  console.log(data.data);
  const todoList = data.data
  const h = lists[listIndex++].id
  const matId=todoList.map((todoList)=>{

       return todoList._id == h
        
  })

  // const u = lists.map((li)=>{
  //   return li.id == todoList.id
  // })
  console.log( matId);
  
  if(matId){
    try {
      await fetch(`http://localhost:5050/deleteTodo/${h}`,{
        method : "DELETE"
      })

    } catch (error) {
      console.log("nhi Bhai");
      
    }
    
  }  
  }

