import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String
})


const todoSchema = new mongoose.Schema({
    dolist : String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData' },
})

export const UserData = mongoose.model('UserData', mySchema);
export const todoData = mongoose.model("todoData", todoSchema)


