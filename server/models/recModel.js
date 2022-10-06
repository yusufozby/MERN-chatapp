const mongoose = require('mongoose');

const recSchema = new mongoose.Schema({
    recname:{
        type:String,
        required:true
    },
    recsurname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    recExp:{
        type:String,
        required:true
    },
    CV:{
        type:String,
        required:true
    }
})

const recModel = mongoose.model("recruitment",recSchema,"recruitments");

module.exports = recModel;