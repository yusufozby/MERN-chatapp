import React from 'react';
import './Contacts.css';
import {SiGmail} from 'react-icons/si';
import {FaPhone} from 'react-icons/fa';
import{RiCustomerService2Fill} from 'react-icons/ri';

const Contacts = () => {
  return (
    <div className='m-100'>
        <div className='container'>
          <div className='row '>
          <div className='col-half'>
            <h1 className='contact-title'>Contact</h1>
            <p className='contact-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      
          </div>
          <div className='col-half p-0'>
      <div className='row m-0' id='contactForm'>
          <div  className='col-half '>
          
           
              
            <input type="text" className='contact-text' placeholder='Name'/>
      
            </div>
            <div  className='col-half'>
          
           
              
          <input type="text" className='contact-text' placeholder='Surname'/>
    
          </div>
          <div  className='col-full'>
          
           
              
          <input type="text" className='contact-text' placeholder='Email'/>
    
          </div>
          <div  className='col-full'>
          
           
              
          <textarea style={{"height":"100px"}} placeholder='Enter Your Message' className='contact-text contact-textarea'/>
          <button className='submit-contact-form'>Send Message</button>
    
          </div>
          </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-1_3'>
            <div className='contact-card'>
              <div className='contact-card-type-icon'>
                  <SiGmail/>
              </div>
         <div className='contact-card-body'>
          <h2 className='contact-card-title'>Email</h2>
          <p className='contact-card-paragraph'>test@gmail.com</p>
         </div>
            </div>
          </div>
          <div className='col-1_3'>
            <div className='contact-card'>
            <div className='contact-card-type-icon'>
            <FaPhone/>
              </div>
         <div className='contact-card-body'>
          <h2 className='contact-card-title'>Phone</h2>
          <p className='contact-card-paragraph'>+0551 126 70 73</p>
         </div> 
            </div>
          </div>
          <div className='col-1_3'>
            <div className='contact-card'>
               <div className='contact-card-type-icon'>
<RiCustomerService2Fill/>
               </div>
               <div className='contact-card-body'>
          <h2 className='contact-card-title'>Customer Service</h2>
          <p className='contact-card-paragraph'>7 / 24 Support</p>
         </div> 
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contacts