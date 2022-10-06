import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../../Contact';
import Accountinfo from '../accountinfo/Accountinfo';

import '../accountinfo/accountinfo.css';
const Signin = () => {

  const data = useContext(DataContext);
  
  const [repPassword,setRepPassword] = useState('');
  const [regWarning,setRegWarning] = useState('');
  const [checklogin,setCheckLogin] = useState(false);
 const [isLogined,setIsLogined] = useState(false);




const addUser = async (e) => {

  e.preventDefault();
  const isAvailableUsername = (data.allUsers.some((user)=> user.user === data.user));
  console.log(isAvailableUsername)
 const regex = /^([0-9a-zA-Z._]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/
setIsLogined(true);
  if(repPassword !== data.password  ) {
    setCheckLogin(false);
    setRegWarning("Passwords don't match.")

}
  else if(data.password === '' ||  data.user === '' || data.phone === '' || data.userEmail === ''){
  setCheckLogin(false);
   setRegWarning("All fields must be filled");
}
else if(!(regex.test(data.userEmail))){
   setCheckLogin(false);
   setRegWarning("email is Invalid.");

}

else if(data.password.length < 8) {
  setCheckLogin(false);
  setRegWarning("minimum 8 characters required for password.");
}

else if(!(/\d/g.test(data.password))){
  setCheckLogin(false);
  setRegWarning("minimum a numeric character required for password");

}
else if(isAvailableUsername) {
  setCheckLogin(false);
  setRegWarning("This username already taken");
}




else {

const colors = ["#32CD32","#FFAC1C","#6495ED","#ff6347"]
const randomPick = Math.floor(Math.random()*4);

  const newUser = {

    user:data.user,
    password:data.password,
    email:data.userEmail,
    freinds:data.freinds,
    phone:data.phone,
   color:colors[randomPick],
  requests:data.freindsReq,
    
  }
  
 
  await axios.post("http://localhost:3001/createuser",newUser).then(()=>data.getAllUsers());
  setCheckLogin(true);
  setRegWarning("You've registered successfully !!");
  data.setUser("");
  data.setPassword("");
  data.setUserEmail("");
  data.setPhone("");
  
  setRepPassword("");
  
}
 



}
const phoneFormatter = (e) => {
  const a = e.target.value.replace(/[^\d]/,"");
  data.setPhone(a);
  
  
 

}
  return (
    <div>
<div className="container">
    <div className="account-form">
        <div className="account-form-top">
        <h2>Sign in</h2>
        </div>
   
    <div className="account-form-body">
        <form className="row m-0" onSubmit={(e)=>addUser(e)} >
    <div className='col-full' >
    
                <label  className='account-text'>Username</label>
              <input type="text" value={data.user} onChange={(e)=>data.setUser(e.target.value)}  className='account-input' />
              </div>
              <div className="col-full ">
                <label  className='account-text'>Password</label>
              <input type="password" value={data.password} onChange={(e)=>data.setPassword(e.target.value)} className='account-input' />
              </div>
              <div className="col-full">
                <label  className='account-text'>Repeat Password</label>
              <input type="password" value={repPassword} onChange={(e)=>setRepPassword(e.target.value)}    className='account-input' />
              </div>
              <div className="col-full">
                <label  className='account-text'>Email</label>
              <input type="email" value={data.userEmail} onChange={(e)=>data.setUserEmail(e.target.value)}   className='account-input' />
              </div>
              <div className="col-full">
                <label  className='account-text'>Phone</label>
              <input type="phone" maxLength={11} placeholder='xxxxxxxxxxx' value={data.phone} onChange={(e)=>phoneFormatter(e)}   className='account-input' />
              </div>
              <div className="col-full ">
             
          <button type='submit' className='account-btn'>Sign in</button>
              </div>
               </form>
               <div className='col-full' style={{"display":isLogined ? "block" : "none"}}>
               <Accountinfo  checklogin={checklogin} regWarning={regWarning} />
               </div>
    </div>
    </div>
</div>
    </div>
  )
}

export default Signin