import React from 'react'
import './Recruitment.css';
import {GoPrimitiveDot} from 'react-icons/go';
import RecruitmentImg from '../../img/Recruitment.jpg'
import { useContext } from 'react';
import { DataContext } from '../../Contact';
import {AiFillFileZip,AiFillCloseCircle} from 'react-icons/ai';
import {IoIosClose} from 'react-icons/io';
import {TiTick} from 'react-icons/ti'





const Recruitment = () => {


  const uploadButton = (e) => {
document.querySelector(".upload-recruitmentFile").click();

  }

 
  const data = useContext(DataContext);

  const removeSelectedFile = () => {
document.querySelector(".upload-recruitmentFile").value = ""
  data.setCV("")
  data.setErrFileMsg(false)
  }




  return (
    <div className='container'>
        <h2 className='recruitment-title'>Recruitment</h2>
        <div className='recruitment-content'>
           <h3 className='recruitment-sub-title'>
           What is our business ?</h3> 
           <p className='recruitment-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ullam totam ad ratione quo iste eaque amet dolor dolorem commodi. Dolorum, eveniet. Neque possimus deleniti quam, placeat commodi tempora eius esse porro exercitationem, quisquam voluptatem veniam ratione quidem laudantium debitis. In dicta numquam esse asperiores quod dolore. Minima voluptatem, consectetur esse commodi aperiam repellat perferendis hic quasi velit dolorem sed repudiandae unde culpa sunt doloremque similique ipsum ad suscipit totam ipsam? Sint nihil incidunt, ex repellat minus, amet ipsam totam eveniet voluptatem, suscipit magni quam accusantium earum. Fugiat corporis fugit possimus, facere amet quo dicta aut iure quam delectus vero eos repudiandae! Pariatur accusamus dolorum veritatis unde excepturi sequi tenetur commodi! Ab fugiat, nihil nisi corporis, pariatur tempore officiis ipsam repellat ducimus molestiae, earum voluptatum quisquam alias velit asperiores? Odit eos nihil omnis temporibus dolorem perferendis mollitia voluptatem asperiores, natus delectus magni soluta nemo repudiandae molestias quis harum hic consequatur numquam beatae! Deserunt, quaerat quam ipsa explicabo libero in eveniet perferendis molestiae unde eos error? Ab asperiores assumenda modi porro vero sed laborum natus placeat.</p>
          <br/>
          <br/>
           <h3  className='recruitment-sub-title'>What is our aim ?</h3>
           <p className='recruitment-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore exercitationem fugiat mollitia sit ducimus deleniti dolores maiores nam natus ad eveniet ea vero ratione eligendi dicta totam, ut nostrum enim. Temporibus minus unde quam, quia aperiam autem eum iure, dolore ex reprehenderit maxime accusantium esse, rem assumenda? Modi dignissimos cumque cum tempore architecto adipisci quibusdam corporis aperiam voluptate harum, ratione ex ut perferendis nobis, doloremque ipsum odit optio vel eligendi mollitia velit itaque labore odio delectus! Voluptate exercitationem asperiores maxime atque eum dicta! Voluptates sapiente exercitationem excepturi quaerat! Officia modi nisi velit quisquam distinctio perferendis similique, ab cupiditate laboriosam.</p>
          <br/>
          <br/>
          <div className="row m-0">
              <div className='col-half' id='makeZeroPad'>
              <h3 className='recruitment-require-title' >Minimum requirements</h3>
                        <ul className='recruitment-require-list'>
                          <li className='recruitment-skill'>
                <GoPrimitiveDot className='moveBottom'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum at obcaecati labore est veritatis?
                          </li>
                          <li className='recruitment-skill'>
                <GoPrimitiveDot className='moveBottom'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum at obcaecati labore est veritatis?
                          </li>
                          <li className='recruitment-skill'>
                <GoPrimitiveDot className='moveBottom'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum at obcaecati labore est veritatis?
                          </li>
                          <li className='recruitment-skill'>
                <GoPrimitiveDot className='moveBottom'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum at obcaecati labore est veritatis?
                          </li>
                         
                          <li className='recruitment-skill'>
                <GoPrimitiveDot className='moveBottom'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum at obcaecati labore est veritatis?
                          </li>
                        </ul>
                         
                         
                         </div> 
                         <div className="col-half p-0">
                          <img src={RecruitmentImg} alt='' />
                         </div>
                       
           
            
           </div>
           <div className="recruitment-form">
            <h2>Recruitment Form</h2>
             <div className="row m-0">
              <div className="col-half">
                <label htmlFor="rec-name" className='recruitment-text'>Name</label>
              <input type="text" id='rec-name' name='recname' value={data.recname} onChange={(e)=>data.setRecname(e.target.value)}  className='recruitment-input' />
              </div>
              <div className="col-half">
                <label htmlFor="rec-surname" className='recruitment-text'>Surname</label>
              <input type="text" id='rec-surname' name='recsurname' value={data.recsurname} onChange={(e)=>data.setRecsurname(e.target.value)} className='recruitment-input' />
              </div>
              <div className="col-full">
                <label htmlFor="rec-email" className='recruitment-text'>Email</label>
              <input type="email" id='rec-email' name='email' value={data.email} onChange={(e)=>data.setEmail(e.target.value)} className='recruitment-input' />
              </div>
              <div className="col-full">
                <label htmlFor="rec-desc" className='recruitment-text'>What is your aim to apply this job ?</label>
                <textarea id='rec-desc' name='recExp' value={data.recExp} onChange={(e)=>data.setRecExp(e.target.value)}  className='recruitment-input'></textarea>
              </div>
              <div className="col-full" id='uploadAr'>
                <div className="upload-area">
                  <input  type="file"  onChange={(e)=>data.chooseFile(e)} className='upload-recruitmentFile' hidden />
                  <h2 className='upload-file-title'>Upload your CV  as a ZIP file</h2>
                  <div  className='upload-area-btn'>
                  <button  className='upload-file-btn' onClick={(e)=>uploadButton(e)}>Upload CV</button>
                  </div>
                </div>
               
              </div>
              {
              data.CV ? 
              
              (<div className='col-full'>
                 
                      <div className='uploaded-file-area'>
                     <AiFillFileZip className='zip-file-icon'/>
                     <div className='zip-file-name'>
                     <span >{data.CV}</span>
                     </div>
                     <IoIosClose onClick={()=>removeSelectedFile()} id='close-uploaded-file-btn'/>
                    </div>
                 
                </div>
              )
             :  data.errFileMsg && !(data.CV) ?
               
               (<div className="col-full">
         <div className="err-filemsg-area">
           <span className="err-filemsg"><AiFillCloseCircle className='err-zip-file-icon'/> This is not a ZIP file. Choose ZIP file.</span>
         </div>
               </div>
               )
               : null
}

             

              <div className="col-full">
                <button  onClick={()=>data.addRec()} className='submit-rec-btn'>Submit</button>
              </div>
              {
                !data.apply    ?
                <div className="col-full">
                <div className="err-filemsg-area">
                  <span className="err-filemsg"><AiFillCloseCircle className='err-zip-file-icon'/> {data.recErr}</span>
                </div>
                      </div>

                      :
                      (data.apply && data.recErr) ?
                      <div className="col-full">
                      <div className="success-filemsg-area">
                        <span className="err-filemsg"><TiTick className='err-zip-file-icon'/> {data.recErr}</span>
                      </div>
                            </div>
                            : null

              }

              </div>
          
            </div>
           </div>
    </div>
  )
}

export default Recruitment