const express = require('express');
const mongoose = require('mongoose');
const recModel = require('./models/recModel');
const userModel = require('./models/userModel');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverModel = require('./models/serverModel');




const app = express();

mongoose.connect("mongodb://localhost:27017/chat")
.then(()=>console.log("Connected Successfully !!"))
.catch(()=>console.log("Failed to connect !!"))


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload());


app.get("/getrec",(req,res)=>{
  recModel.find({},(err,result) =>{
    if(err){
        console.log(err);
    }
    else {
        res.send(result);
    }
  })
    
    
})

app.post("/createrec",async (req,res)=>{
  const rec = req.body;
  const newRec = new recModel(rec);

  await newRec.save();
  res.json(rec);
  


app.post("/uploadfile",(req,res)=>{
  var file = req.files.file;
  var filename = file.name;
  file.mv('./uploads/'+filename,(err)=>{
    if(err){
      console.log(err)
    }
    else {
      res.send("File UPLOADED")
    }
  })
  })

})
app.get("/getusers",(req,res)=>{
   userModel.find({},(err,result)=>{
    if(err){
      console.log(err);
    }
    else {
      res.send(result);
    }
   })
})
app.post("/createuser",async (req,res)=>{
  const user = req.body;
  const newUser =new userModel(user);
await newUser.save();

res.send(user);

});


app.get("/getservers",(req,res)=>{
serverModel.find({},(err,result)=>{
  if(err) {
    console.log(err);

  }
  else {
    res.json(result);
  }
})
})





app.listen(3001,()=>{
    
    console.log("Server running at http://localhost:3001")
})
