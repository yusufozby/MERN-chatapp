const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    freinds:{
     type:Array,
     required:true
    },
    phone:{
        type:String,
        required:true
    },
    requests : {
        type:Array,
        required:true
    },
    color:{
        type:String,
        required:true
    }
 


});
const userModel = mongoose.model("user",userSchema,"users");

module.exports = userModel;





