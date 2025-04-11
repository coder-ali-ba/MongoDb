

const CurrentUser =JSON.parse(localStorage.getItem("CurrentUser"))

const CurrUser =document.getElementById("CurrUser")
CurrUser.innerHTML = `<h1>${CurrentUser[0].email}</h1>`;



const todoItem=document.getElementById("todoItem")
const todos =document.getElementById("todos")

const getTodos = async() => {
  try {
    const response =  await fetch("http://localhost:5050/getTodoList")
    let data = await response.json()
    const todoList = data.data
    todoList.map((item)=>{
    const listId=item._id
      todos.innerHTML +=`
      <span id="spn" >
         <div>
             <li id="${listId}" class="allLists">${item.dolist} </li>
         </div>
         <div>
             <i class="bi bi-exposure edi" id="${listId}" onclick="editFun(this)"></i>
             <i class="bi bi-x-lg  del" id="${listId}"   onclick="delFun(this)"></i> 
         </div>
      </span>
       `;
    })  
  } catch (error) {
    console.log("fetching error", error.message);
  }
}


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
     
     todos.innerHTML= ""
     getTodos()
  } catch (error) {
    console.log("addTodo Err");   
  }

  todoItem.innerHTML ==""
}




async function delFun(ele) {
      try {
         await fetch(`http://localhost:5050/deleteTodo/${ele.id}`,{
            method : "DELETE"
          })
          todos.innerHTML=""
           getTodos()
      } catch (error) {
       console.log("nhi Bhai");
      
      } 
}  
  


 async function editFun(ele){
     
      const appendItem = prompt("edit your todo")

      let obj ={
        dolist : appendItem
      }
     
      try {
       await fetch(`http://localhost:5050/update/${ele.id}`, {
        method :"PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
      })
      todos.innerHTML =""
      getTodos()
        
      } catch (error) {
        console.log(error.message);
      }  
  }




async function deleteAllFun(){
  await  fetch("http://localhost:5050/deleteAll", {
    method : "DELETE",
    headers :{
      "COntent-Type" :"application/json"
    }
  })
  .then(()=>{
    todos.innerHTML=""
  })
}


const logOutBtn =() => {
  window.location = "../Authentications/login/login.html"
}
  window.addEventListener('load', getTodos)
  // window.delFun=delFun()
