import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../Contact';
import Accountinfo from '../accountinfo/Accountinfo';
import '../accountinfo/accountinfo.css';
const Signup = () => {

  const [username,setUsername] = useState('');
  const [userPassword,setUserPassword] = useState('');
  const [checkuserLogin,setCheckUserLogin] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [regWarning,setRegWarning] = useState('');
const data = useContext(DataContext);
const navigate = useNavigate();

const verifyFunction = (user) => {
  if(username === user.user && userPassword === user.password) {
    return true
  }
  else {
    return false;
  }


}
  const verifyUser  = async (e) =>{

    e.preventDefault();
    setIsClicked(true);

  const checkuserLogin = data.allUsers.some(verifyFunction);
  setCheckUserLogin(checkuserLogin);
  if(checkuserLogin) {
    data.setLoginSuccess(true);
  const findUser = data.allUsers.find(verifyFunction);
  data.setActiveUser(findUser);
  console.log(data.activeUser)
  
  data.setCheckLog(false);
  navigate('/app');




  } 
  else {
setRegWarning("Wrong Password or Username.");
  }
  
  }

  console.log(data.loginSuccess)
  return (
    <div>
        <div className="container">
    <div className="account-form">
        <div className="account-form-top">
        <h2>Sign up</h2>
        </div>
   
    <div className="account-form-body">
        <form onSubmit={(e)=>verifyUser(e)} className="row m-0">
    <div className="col-full">
                <label  className='account-text'>Username</label>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text"  className='account-input' />
              </div>
              <div className="col-full">
                <label  className='account-text'>Password</label>
              <input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}  type="password" className='account-input' />
              </div>
              <div className="col-full">
            
              <button type='submit' className="account-btn">Sign up</button>
              </div>
              
              </form>
              <div className='col-full' style={{"display":isClicked ? "block" : "none"}}>
               <Accountinfo  checklogin={checkuserLogin} regWarning={regWarning} />
               </div>
              </div>
              
              </div>
              </div>
    </div>
  )
}

export default Signup