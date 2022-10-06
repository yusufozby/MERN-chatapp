import React from 'react'
import './Blog.css'

import { useContext } from 'react';
import { DataContext } from '../../Contact';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const {id} = useParams();
const data = useContext(DataContext);

const navigate = useNavigate();

const slctdBlog = data.blogs.find(blog => blog.id === Number(id));

const lastBlogs = data.blogs.filter(blog => (blog.id !== Number(id)) && (blog.last));
const otherBlogs = data.blogs.filter((blog) => !blog.last);

const navBlogAndScroll = (id) =>{
  navigate('/blog/'+id);
  window.scrollTo(0,0)
}
return (
    <div className='container'>
        <h2 className='blog-title'>BLOGS</h2>
        <h4 className='blog-sub-title'>Lorem ipsum dolor, sit amet </h4>
<div className="row">
        <div className='col-3_4'>
      <div className='blog-card'>
        <div className='blog-card-img'>
<img src={slctdBlog.blogImg} alt='' />
</div>
<div className='blog-card-body'>
  <h2>{slctdBlog.blogTitle}</h2>
  <p>{slctdBlog.blogParagraph}</p>
<span>{slctdBlog.blogDate}</span>
</div>
    </div>  
      </div>
      <div className='col-quarter'>
      <div className='blog-card'>
        <div className='blog-card-divider-section'>
          <hr/>
          <div className="blog-card-divider-title">
          <h5 >Last Blogs</h5>
          </div>
      
        </div>
        
          {
          lastBlogs.map((other)=>(
            <>
            <div onClick={()=>navBlogAndScroll(other.id)} className="blog-img">
         <img src={other.blogImg} alt='' />
          <h5>{other.blogTitle}</h5>
        </div>
        <span className='blog-date'>{other.blogDate}</span>
        <div className='blog-divider' />
            </>
          ))
          }
         
      
    </div>  
      </div>
    
      </div>
      <h3 id='prev-blogs-title'>Other Blogs</h3>
  <div id='blogDivider' className='divider'/>
      <div className="row m-0" >
      { otherBlogs.map((other)=>(
 <div className="col-quarter">
 <div onClick={()=>navBlogAndScroll(other.id)} className="blog-card">
  <div className="blog-img">
  <img src={other.blogImg} alt="" />
  </div>
   <div  className="blog-card-body other-blogs-card">
    <h5>{other.blogTitle}</h5>
    <p>{other.blogParagraph}</p>
    <small className='blog-date'>{other.blogDate}</small>
   </div>
   </div>
 </div>
      ))
     

      }

</div>
      
      </div>
  )
}

export default Blog;