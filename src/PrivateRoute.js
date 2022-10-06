import React, { useContext, useEffect } from 'react'
import { Navigate, Route,Outlet, useNavigate } from 'react-router-dom'
import { DataContext } from './Contact'
const PrivateRoute = () => {
  const data = useContext(DataContext);

  if(!data.activeUser._id) {
    return <Outlet/>
  }
  else {
    return <Navigate to="/app"/>
  }
  
}

export default PrivateRoute