import React from 'react'
import './Appheader.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Contact';


const Appheader = () => {
if(window.location.pathname.includes("app")){
document.body.style.backgroundColor = "#484848";
}

const data = useContext(DataContext);
console.log(Boolean(data.loginSuccess));
const navigate = useNavigate();
const logout = () => {
  data.setCheckLog(false);
  data.setActiveUser({});
  document.body.style.backgroundColor = "#9bddff";
  navigate("/");

  
  
}
const username = String(data.activeUser.user);
  return (
    <div className='application'>
    <div className='app-navbar'>
      
        <ul>
          <li><Link to="/app">Home</Link></li>
          <li><Link to="/x">Settings</Link></li>
          <li><Link to="/app/servers">Servers</Link></li>
          <li><Link to="/x">Profile</Link></li>

        </ul>
        <div className='app-navbar-end'>
           <div style={{"backgroundColor":data.activeUser.color}} className="app-logo">
            <span style={{"textTransform":"uppercase"}}>{username.toUpperCase().slice(0,1)}</span>
           </div>
<span id='app-user'>{data.activeUser.user}</span>
<button className='logout-btn' onClick={()=>logout()}>logout</button>
        </div>
     
    </div>
    </div>
  )
}

export default Appheader