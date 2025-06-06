import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    _id : {type : string ,  required : true}, 
    name : {type :strig , required : true},
    email : {type : string , required : true , unique : true},
    imageUrl : {type : string , required : true},
    cartItems : {type: Object , default : {}}
}, {minimize : false })

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User