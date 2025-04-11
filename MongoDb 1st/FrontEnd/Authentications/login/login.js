async function logIn() {
    const idName =document.getElementById("idName")
    const idPassword =document.getElementById("idPassword")

    const response = await fetch("http://localhost:5050/getDatas")
    const data = await response.json()
 
    const users =data.data
    const z = users.filter((user)=>{
           return user.password == idPassword.value
    })

    if(!z || z =="" || idName.value == ""){
        alert("User not Found")
    }else {
        window.location = "../../todoApp/todo.html";
        
        console.log(z);
        
        localStorage.setItem("CurrentUser", JSON.stringify(z))

    }
    
    
}
