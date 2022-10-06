
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';
import Help from './components/help/Help';
import { DataContext } from './Contact';
import {  useState,useEffect } from 'react';
import Blog from './components/blog/Blog';
import blogImg1 from './img/blogImg1.png'
import blogImg2 from './img/blogImg2.jpg';
import blogImg3 from './img/blogImg3.png';
import blogImg4 from './img/blogImg4.png';
import blogImg6 from './img/blogImg6.jpg';
import blogImg5 from './img/blogImg5.png';
import blogImg7 from './img/blogImg7.png';
import blogImg8 from './img/blogImg8.png';
import Recruitment from './components/recruitment/Recruitment';
import axios from 'axios';
import Signin from './components/account/signin/Signin';
import Signup from './components/account/signup/Signup';
import Appheader from './application/appheader/Appheader';
import PrivateRoute from './PrivateRoute'
import Servers from './application/servers/Servers';
import MissingRoute from './MissingRoute';



function App() {

  

  const [recname,setRecname] = useState('');
  const [recsurname,setRecsurname] = useState('');
  const [email,setEmail] = useState('');
  const [recExp,setRecExp] = useState('');
  const [CV,setCV] = useState('');
  const [recfile,setrecFile] = useState({})
  const [errFileMsg,setErrFileMsg] = useState(false);
  const [recErr,setRecErr] = useState('');
  const [apply,setApply] = useState(true);
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');
  const [userEmail,setUserEmail] =useState('');
  const [freinds,setFreinds] = useState([]);
  const [phone,setPhone] = useState('');
  const [allUsers,setAllUsers] = useState([]);
  const [activeUser,setActiveUser] = useState({});
  const [loginSuccess,setLoginSuccess] = useState(false);
  const [checkLog,setCheckLog] = useState(true);
  const [freindReq,setFreindReq] = useState([]);
  const getAllUsers = async () => {
     await axios.get("http://localhost:3001/getusers").then((res)=>setAllUsers(res.data))
     

     
   }
  




const serviceCard= [
    {
    id:1,
    paragraph:"What is CloudyAPI ?",
    opened:false,
    },
    {
    id:2,
    paragraph:"How to use CloudyAPI ?",
    opened:false,
    },
    {
      id:3,
      paragraph:"Does it have mobile app ?",
      opened:false,  
    },
    {
      id:4,
      paragraph:"How I contact customer service ?",
      opened:false
    },
    {
      id:5,
      paragraph:"What are the benefits to use CloudyAPI ?",
      opened:false

    }
  ]




  const blogs = [{
    id:1,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg1,
    blogDate:"02 / 09 / 2022",
   last:true
  },
  {
    id:2,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg2,
    blogDate:"11 / 07 / 2022",
    last:true
  },
  {
    id:3,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg3,
    blogDate:"21 / 04 / 2022",
    last:true
  },
  {
    id:4,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg4,
    blogDate:"17 / 02 / 2022",
    last:true
  },
  {
    id:5,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg5,
    blogDate:"11 / 10 / 2021",
    last:false
  },
  {
    id:6,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg6,
    blogDate:"08 / 23 / 2021",
    last:false

  },
  {
    id:7,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg7,
    blogDate:"06 / 30 / 2021",
    last:false
  },
  {
    id:8,
    blogTitle:"Lorem ipsum, dolor sit amet",
    blogParagraph:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni exercitationem explicabo voluptas assumenda dolor 
    laboriosam quae voluptatibus in aut eveniet ea possimus eos nemo 
    ut nesciunt cumque nam autem eius, cupiditate accusamus doloremque 
    doloribus voluptate odio? Deserunt cum atque magnam dolor 
    quisquam dolores provident commodi facere sapiente, ipsam id aliquam?`,
    blogImg:blogImg8,
    blogDate:"03 / 18 / 2021",
    last:false
  }

]
  const [help,setHelp] = useState(serviceCard);
 
  useEffect(()=>{
     
    getAllUsers();

  

 },[]);





 useEffect(()=>{

  const data = localStorage.getItem("data");
  setActiveUser(JSON.parse(data));
  
  
  
    },[])

    
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(activeUser));

    },[activeUser])

  
  const addRec =  async () => {
    setApply(true)
    const newRec = {
      recname,
      recsurname,
      email,
      recExp,
      CV
    }
    const regex = /^([0-9a-zA-Z._]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/
    if(!regex.test(email)) {
      setApply(false);
      setRecErr('This is an Invalid Email Please enter valid email.')
      
    }
    else {
      if(recname !== "" && recsurname !== "" && email !== "" && recExp !== "" && CV !== "") {
        
        await axios.post("http://localhost:3001/createrec",newRec).then((res)=>console.log(res.data));
        const formData = new FormData();
        formData.append("file",recfile)
     
        await axios.post("http://localhost:3001/uploadfile",formData).then(()=>console.log("File added successfully !!")).catch(()=>console.log("Failed to add"))
         setRecExp("");
         setRecname("");
         setRecsurname("");
         setEmail("");
         setCV("");
         setApply(true);
         setRecErr("Recruitment apply successfull !!");
         

        
      }
      else {
        setRecErr('No input can be empty.');
        setApply(false);
       }
    }
   

  }


  const adjustDetailsHelp = (id) => {
 const newServiceCond = help.map((help)=>{
  if(id === help.id){
    help.opened = !help.opened;
  }
  return help
 })
 setHelp(newServiceCond);

    

  }

  const chooseFile =  (e) => {
 e.preventDefault();
const file = e.target.files[0];
if(file.type === "application/x-zip-compressed") {
 
  setrecFile(file);
  setCV(file.name);
  setErrFileMsg(false)
}
else {
   setErrFileMsg(true);

}


 }


  useEffect(()=>{
const bodyBackgroundColor = document.querySelector("body");
if(window.location.pathname.includes("app")){
  bodyBackgroundColor.style.backgroundColor = "#484848";
}
else {
  bodyBackgroundColor.style.backgroundColor = "#9bddff"
}



  },[])

  



 
  

  

    



 
  
  return (
  
    <DataContext.Provider value={{
      help,
      adjustDetailsHelp,
      blogs,
      chooseFile,
      recname,
      setRecname,
      recsurname,
      setRecsurname,
      email,
      setEmail,
      recExp,
      setRecExp,
      CV,
      setCV,
      addRec,
      errFileMsg,
      setErrFileMsg,
      recErr,
      apply,
      user,
      setUser,
      password,
      setPassword,
      userEmail,
      setUserEmail,
      freinds,
      setFreinds,
      phone,
      setPhone,
      allUsers,
      getAllUsers,
      activeUser,
      setActiveUser,
      loginSuccess,
      setLoginSuccess,
      checkLog,
      setCheckLog,
   
      freindReq,
      setFreindReq
     
       }}>
    <div className="App">
 
      <Router>
            

  
<Routes> 

<Route element={<PrivateRoute/>} >
<Route path='/' element={  <>
  <Header/>
  <Main/><Footer/>
  </>} >

  </Route>  

<Route path='/contacts'  element={<><Header/><Contacts/> <Footer/></>}/>    
<Route path='/help' element={<><Header/><Help/><Footer/> </>}/>
<Route path='/blog/:id' element={<><Header/><Blog/><Footer/> </>}/> 
<Route path='/recruitment' element={<><Header/><Recruitment/> <Footer/></>}/> 

<Route path='/signin' element={<><Header/><Signin/><Footer/> </>}/> 
<Route path='/signup' element={<><Header/><Signup/><Footer/></>}/>

</Route>

 
{
activeUser._id ? 
<>
<Route element={<><Appheader/><Servers/></>} path="/app" />
<Route element={<><Appheader/></>} path="/app/servers" />
</>
: <Route element={<Navigate to="/"/>} path="*"/>
}










  




 



 
 
 


</Routes>





  
 

</Router>



    </div>
    </DataContext.Provider>
  );
}

export default App;