const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    server:{
        type:String,
        required:true
   },
   users:{
    type:Array,
    required:true
   },
   chat:{
    type:Array,
    required:true
   }


})

const serverModel = mongoose.model("server",serverSchema,"servers");

module.exports = serverModel;
