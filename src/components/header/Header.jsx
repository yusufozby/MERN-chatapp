import React,{useState} from 'react'
import './Header.css'
import {FaBars} from 'react-icons/fa';

import {IoIosChatboxes} from 'react-icons/io';
import {IoClose} from 'react-icons/io5'
const Header = () => {
    const [sidelist,setSidelist] = useState(false);

    const links = [
      {
        id:1,
        link:'/',
        name:'Home'
      },
      {
        id:2,
        link:'/contacts',
        name:'Contacts'
      },
      {
        id:3,
        link:'/help',
        name:'Help'
      },
      {
        id:4,
        link:'/blog/1',
        name:'Blog'
      },
      {
        id:5,
        link:'/recruitment',
        name:'Recruitment'

      }
      
    ]
  return (
    <div>

<div className='header'>
 
      <IoIosChatboxes className='chat-logo'/>
      <ul className='header-list'>
 
 {
  links.map((webLinks)=>(
<li><a key={webLinks.id} href={webLinks.link}>{webLinks.name}</a></li>
  ))
 }
        
 
    </ul>
      <div className='account-buttons'>
      <a href='/signup' id='sign-up'>Sign up</a>
        <a href='/signin'>Sign in</a>
     
      </div>
      <button onClick={()=>setSidelist(true)} className='header-list-btn'><FaBars/></button>
      <div id={sidelist ? 'open-side-list' : 'close-side-list'} className='header-side-list'>
        <IoClose className='close-side-list-btn' onClick={()=>setSidelist(false)}/>
        
        <ul className='sidelist'>
          {
            links.map((mobileLinks)=>(
        <li key={mobileLinks.id} ><a href={mobileLinks.link}>{mobileLinks.name}</a></li>
            ))
          }
  
 </ul>
      <hr/>
      <div className='sidelist-account-links'>
      <a id='sidelistSignup' href='/signup'>Sign up</a>
      <a id='sidelistSignin' href='/signin'>Sign in</a>
      </div>
   </div>
      <div className='side-list-background' onClick={()=>setSidelist(false)} id={sidelist ? 'open-background' :'close-background'}></div>

   </div>
   </div>
 
    
  )
}

export default Header