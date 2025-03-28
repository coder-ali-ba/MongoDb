import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    userName : String,
    phoneNo : Number,
    imageUrl : String
})

const UserData = mongoose.model('UserData', mySchema);
export default UserData