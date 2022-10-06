import React from 'react'
import './Main.css'
import chathero from '../../img/chathero.png'
import customerservice from '../../img/customerservice.jpg'

import Footer from '../footer/Footer'
const Main = () => {
  return (
    <div>
      <div className='hero-img'>
         <div className='hero-img-content'>
          <h2>CloudyAPI</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis porro facere nulla harum, earum quis. Laborum consequatur veniam natus, ex perspiciatis temporibus sunt, eligendi adipisci nam ipsa sit possimus error!</p>
        <span>Keep in touch through us</span>
        <br/>
        <button >Learn More</button>
         </div>

      </div>
    <div className='container'>
        <div className='row'>
        <div className='col-half'>
            <h2 className='chat-hero-title'>Lets Chat With Your Freinds </h2>
            <p className='chat-hero-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <a className='chat-hero-link' href='/'>Get Started</a>
        </div>
        <div className='col-half'>
            <div className='chat-hero-img-content'>
            <img src={chathero} alt='' />
          </div>
        </div>
        </div>
        <div className='divider' />
        <div className='row'>
        <div className='col-half order-2'>
        <div id='specialHeroImg'  className='chat-hero-img-content'>
            <img  src='https://www.modula4.com/wp-content/uploads/Map-partners-small.png' alt='' />
          </div>
          
          </div>

          <div className='col-half order-1'>
          <h2 className='chat-hero-title'>RELIABLE TECH FOR STAYING CLOSE</h2>
          <p className='chat-hero-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          </div>
         
          </div>
          <div className='divider' />
        
         <div className='row'>
         
          <div className='col-half'>
          <h2 className='chat-hero-title'>full Support with our great service</h2>
          <p className='chat-hero-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
          </div>
          <div className='col-half'>
          
          <div className='chat-hero-img-content'>
            <img  src={customerservice} alt='' />
          </div>
          </div>
          
         
          </div>
          <div className='divider' />
          <div className='col-full'>
            <div>
              <h2 style={{"textAlign":"center"}} id="introduceUs" className='chat-hero-title'>Who Are We ?</h2>
              <p className='chat-hero-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              </p>

            </div>
          </div>
         

          </div>
       
    </div>
  )
}

export default Main