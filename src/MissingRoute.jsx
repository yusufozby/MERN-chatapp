import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MissingRoute = () => {
    const navigate = useNavigate();
    useEffect(()=>{
navigate("/app");
    },[])
  return (
    <div>MissingRoute</div>
  )
}

export default MissingRoute