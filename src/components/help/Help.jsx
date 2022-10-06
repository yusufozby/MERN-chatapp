import React, { useContext } from 'react'
import './Help.css';
import {BiBarChartAlt,BiDesktop} from 'react-icons/bi';
import {AiOutlineLineChart, AiOutlinePlus} from 'react-icons/ai';
import {MdOutlineLocalPostOffice} from 'react-icons/md';
import {IoMdCreate} from 'react-icons/io';
import { DataContext } from '../../Contact';

const Help = () => {
  const data = useContext(DataContext);
  const serviceCards = data.help;
  return (
    <div>
    <div className='container'>
             <h1 className='service-title'>Our Services</h1>
             <h5 className='service-sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h5>
      <div className='row'>
 
        <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><BiBarChartAlt/></h1>
            <div className='service-card-body'>
              <h4>Marketing Services</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div>
        <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><BiDesktop/></h1>
            <div className='service-card-body'>
              <h4>Web App Development</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div> <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><AiOutlineLineChart/></h1>
          
            <div className='service-card-body'>
              <h4> 7 / 24 Call Service</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div>
        <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><MdOutlineLocalPostOffice/></h1>
            <div className='service-card-body'>
              <h4>Social Media Marketing</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div> <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><BiBarChartAlt/></h1>
            <div className='service-card-body'>
              <h4>Coorparate Business</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div> <div className='col-1_3'>
          <div className='service-card'>
            <h1 className='service-card-title'><IoMdCreate/></h1>
            <div className='service-card-body'>
              <h4>Creative Consultancy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat placeat corporis numquam eveniet quisquam, dolor porro incidunt ipsa.</p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
    <h2 className='help-title'>Help</h2>
      <h5 className='service-sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam neque adipisci provident earum saepe?</h5>
      <div id='flexColumn'>
        {
         serviceCards.map((help)=>(
          <div key={help.id}  className="help-card">
       <div onClick={()=>data.adjustDetailsHelp(help.id)} className='help-card-header'> 
          <p className='help-card-question'>{help.paragraph}</p>
          <span className='help-card-icon'><AiOutlinePlus style={{"transform":help.opened ? "rotate(45deg)" :"rotate(0deg)"}}/></span>
          </div>
          <div  style={{"display":help.opened  ?"block" : "none"}} className="help-card-body">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia mollitia incidunt quisquam explicabo laboriosam velit impedit repellendus. Soluta officia, repellat quas ex ipsam iste, iure corporis ipsum minima ipsa temporibus ea laudantium consequuntur maiores similique sed impedit a molestias sint! Commodi quod dolores quam recusandae. Ipsa suscipit adipisci dolores ipsam quae, aut quaerat. Voluptatum quas quisquam perspiciatis sed ea ex culpa magni itaque tenetur ut, commodi, deserunt obcaecati non ipsa optio consequuntur accusantium atque.</p>        
          </div>
        </div>
         )

         )
        }
     
      </div>
    </div>
  )
}

export default Help;