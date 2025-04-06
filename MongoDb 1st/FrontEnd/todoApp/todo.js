

const CurrentUser =JSON.parse(localStorage.getItem("CurrentUser"))

const CurrUser =document.getElementById("CurrUser")
CurrUser.innerHTML = `<h1>${CurrentUser[0].email}</h1>`;





const todoItem=document.getElementById("todoItem")
const todos =document.getElementById("todos")

// let listNo =0;
const getTodos = async() => {
  const response =  await fetch("http://localhost:5050/getTodoList",)
  let data = await response.json()
  console.log(data.data);
  const todoList = data.data
  todoList.map((item)=>{
    todos.innerHTML +=`
    <span id="spn">
       <div>
           <li id="lists">${item.dolist} </li>
       </div>
       <div>
           <i class="bi bi-x-lg" id="Cut" onclick="delFun()"></i>
           <i class="bi bi-exposure"></i>
       </div>
    
    </span>
     `;
  })   
}
getTodos()

async function addto(){
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


//    todos.innerHTML +=`
//    <span id="spn">
//       <div>
//           <li id="lists">${todoItem.value} </li>
//       </div>
//       <div>
//           <i class="bi bi-x-lg" id="Cut" onclick="delFun()"></i>
//           <i class="bi bi-exposure" id="editText" ></i>
//       </div>
   
//    </span>
//     `;

//     todoItem.innerHTML == ""

}

// const editList = () =>{
//     const li = document.getElementById("lists")
//     const input = document.createElement("input");
//     input.type="text"

//     li.innerHTML = ""
//    li.appendChild(input);
   
    
// }




async function delFun(){
document.getElementById("spn").style.display="none";

// const response = await fetch("http://localhost/deleteTodo/")
}



