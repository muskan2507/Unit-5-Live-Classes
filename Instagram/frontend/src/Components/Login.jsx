import React, { useState } from 'react'
import axios from "axios"
const Login = () => {
    const [formData,setFormData]=useState({})
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleLogin=async()=>{
     const {data}=await axios.post("http://localhost:8080:login",formData)
    }
  return (
    <div>
        <input type="username" name="username" onChange={handleChange} placeholder="enter username" />
        <input type="password" name="password" onChange={handleChange} placeholder="enter password"/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
