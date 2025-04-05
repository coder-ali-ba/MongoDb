import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String
})

const UserData = mongoose.model('UserData', mySchema);
export default UserData