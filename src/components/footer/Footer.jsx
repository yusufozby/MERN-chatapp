import React, { useState } from 'react'
import './Footer.css';
import {MdLanguage} from 'react-icons/md';
import {AiFillCaretDown} from 'react-icons/ai';
import {FaTwitter,FaInstagram,FaFacebookF,FaYoutube} from 'react-icons/fa';



const Footer = () => {
const [ftrDrop,setFtrDrop] = useState(false);


  return (
    <div className='footer'>
       
<div className='footer-container' >
    <div className='row m-0'>
      <div className='col-quarter'>
        <div className='middle'>
        <h2 className='footer-title'>IMAGINE AMAZING<br/> ENVIRONMENT</h2>
        <div className='footer-dropdown'>
        <button onClick={()=>setFtrDrop(!ftrDrop)} className='language-btn'><MdLanguage className='language-icon'/> Türkçe <AiFillCaretDown className='down-icon'/></button>
    
        <div style={{"display": ftrDrop ? "block" : "none"}} className='footer-dropdown-menu'>
        <ul className='footer-dropdown-list'>
          <li className='footer-dropdown-item'><button >Türkçe</button></li>
          <li className='footer-dropdown-item'><button >English</button></li>

        </ul>
        </div>
        </div>
        <div className='footer-icon-container'>
          <a href='/'><FaTwitter/></a>
          <a href='/'><FaInstagram/></a>
          <a href='/'><FaFacebookF/></a>
          <a href='/' ><FaYoutube/></a>
        </div>
      </div>
      </div>
<div className='col-quarter'>
  <span className='footer-list-title'>Link 1</span>
<ul className='footer-page-list'>
    <li className='footer-page-item'><a href='/'>Home</a></li>
    <li className='footer-page-item'><a href='/'>Contacts</a></li>
    <li className='footer-page-item'><a href='/'>Help</a></li>
    <li className='footer-page-item'><a href='/'>Blog</a></li>
    <li className='footer-page-item'><a href='/'>Recruitment</a></li>
</ul>
</div>
<div className='col-quarter'>
<span className='footer-list-title'>Link 1</span>
<ul className='footer-page-list'>
    <li className='footer-page-item'><a href='/'>Home</a></li>
    <li className='footer-page-item'><a href='/'>Contacts</a></li>
    <li className='footer-page-item'><a href='/'>Help</a></li>
    <li className='footer-page-item'><a href='/'>Blog</a></li>
    <li className='footer-page-item'><a href='/'>Recruitment</a></li>
</ul>
</div>
<div className='col-quarter'>
<span className='footer-list-title'>Link 1</span>
<ul className='footer-page-list'>
    <li className='footer-page-item'><a href='/'>Home</a></li>
    <li className='footer-page-item'><a href='/'>Contacts</a></li>
    <li className='footer-page-item'><a href='/'>Help</a></li>
    <li className='footer-page-item'><a href='/'>Blog</a></li>
    <li className='footer-page-item'><a href='/'>Recruitment</a></li>
</ul>
</div>

</div> 
</div>
    </div>
  )
}

export default Footer