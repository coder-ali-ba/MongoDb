import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import {UserData, todoData } from './schema/schema.js'

import cors from "cors"
const app = express()
app.use(cors())
const PORT= 5050

app.use(express.json())
app.use(urlencoded({extended : true}))

const URI = "mongodb+srv://faix:umair@cluster1.sgqi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
mongoose.connect (URI)
.then(()=>{
    try {
        console.log("Created");  
    } catch (error) {
        console.log("Bad");
        
    }
   
})

app.post("/createUser", async(req, res)=>{
    // console.log(req.body);
    const users =await UserData.create(req.body)
    res.json({
        data : req.body,
        message : "Created"
    })
})

app.get("/getDatas", async(request, response)=>{
    const allData =await UserData.find()

    response.json({
        data : allData ,
        message : "got All Data"
    })

})








app.post("/addToDO", async(req, res)=>{
    // console.log(req.body);
    const users =await todoData.create(req.body)
    res.json({
        data : req.body,
        message : "Created"
    })
})

app.delete("/deleteTodo/:id", async (request , response)=>{
    const toDel =request.params.id
    console.log(toDel);
    
    await todoData.findByIdAndDelete(toDel);
    response.json({
        message : "deleted",
        data : toDel
    })
})




app.get("/getTodoList", async(request, response)=>{
    const allTodos =await todoData.find()

    response.json({
        data : allTodos ,
        message : "got All Data"
    })

})

app.put("/update/:id", async(req , res )=>{
    // console.log(req.params.id);
    const updatedData = req.body
    const idUpdate = req.params.id
    const updated =  await todoData.findByIdAndUpdate(idUpdate, updatedData)
    res.json({
        data :  updated,
        message : "got All Data"
    })
})



app.delete("/deleteAll", async(req, res)=>{
    const delAll =await todoData.deleteMany({})
    res.json({
        data : delAll,
        message: "deleted All"
    })


})

app.listen(PORT, ()=>{
    console.log(`running on http://localhost:${PORT}`);
    
})










