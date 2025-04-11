// async function getData() {
//     try {
//       const response = await fetch("http://localhost:5050/getDatas");
//       const data = await response.json(); // parse the JSON body
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   getData();



const fullName =document.getElementById("fullName")
const email =document.getElementById("email")
const password=document.getElementById("password")
async function signIN() {
    if(fullName.value !="" || email.value !="" || password.value !=""){
        const UserData = {
            userName : fullName.value,
            email : email.value,
            password : password.value
        }
    try {
        const response =await fetch("http://localhost:5050/createUser" , {
            method :"POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(UserData)
        })
    } catch (error) {
        console.log("fetching Err");
        
    }
        
    }else{
        alert("Please Fill All Feilds")
    }

}

