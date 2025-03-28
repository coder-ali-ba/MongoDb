import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import UserData from './schema/schema.js'
const app = express()
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
        data :  allData,
        message : "got All Data"
    })
})

app.put("/update/:id", async(req , res )=>{
    // console.log(req.params.id);
    const updatedData = req.body
    const idUpdate = req.params.id
    const updated =  await UserData.findByIdAndUpdate(idUpdate, updatedData)
    res.json({
        data :  updated,
        message : "got All Data"
    })
})

app.delete("/deleteId/:id", async (request , response)=>{
    const toDel =request.params.id
    await UserData.findByIdAndDelete(toDel);
    response.json({
        message : "deleted"
    })
})



app.listen(PORT, ()=>{
    console.log(`running on http://localhost:${PORT}`);
    
})





