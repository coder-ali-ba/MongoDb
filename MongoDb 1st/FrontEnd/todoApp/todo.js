const CurrentUser =JSON.parse(localStorage.getItem("CurrentUser"))

const CurrUser =document.getElementById("CurrUser")
CurrUser.innerHTML = `<h1>${CurrentUser[0].email}</h1>`;

const todoItem=document.getElementById("todoItem")

const todos =document.getElementById("todos")

function addto(){
   todos.innerHTML+=`
    <li id="lists">${todoItem.value}</li>
    ${todoItem.innerHTML=""}
    `;

}