import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {useNavigate} from 'react-router-dom'
import { FaRegUser,FaEye,FaEyeSlash } from "react-icons/fa";

const Login = ({onLogin})=>{
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email:"",
    password:""
  });
  const [users,setUsers] = useState([])
  const [error,setError] = useState({
    usernameError:"",
    passwordError:""
  });

  const handleChange =(e)=>{
    const {name,value} =e.target;
    setData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    let hasError = false;
    if(!data.email){
      setError((prevState)=>({...prevState,emailError:"Please enter email"}))
      hasError = true;
    }else{
      setError((prevState)=>({...prevState,emailError:""}))
    }
    if(!data.password){
      setError((prevState)=>({...prevState,passwordError:"Please enter password"}))
      hasError = true;
    }else{
      setError((prevState)=>({...prevState,passwordError:""}))
    }
    if (hasError) return;
    onLogin();
    navigate('/')
    // setUsers([...users, data]);
    // setData({ username: "", password: "" });
    
    
  }
    return(
      <div className='container mt-5'>
        <div className='d-flex justify-content-center w-100'>
          
        <form onSubmit={handleSubmit} className='w-50 '>
        <FaRegUser  style={{ fontSize: '5em' }} className='d-block mx-auto' />
          <div className='form-group mt-3'>
            <label className='form-label'>Email</label>
            <input className='form-control form-control-lg ' type='email' value={data.email} name='email' onChange={handleChange} />
            {error.emailError && <div className='alert alert-danger mt-3'>{error.emailError}</div>}
          </div>
          <div className=''>
            <label className=' p-2'>Password</label>
            <div className='flex border rounded  p-2'>
              <input className='w-100 outline-none' type={showPassword ? 'text' :'password'} value={data.password} name='password' onChange={handleChange} />
              <div className='curser-pointer text-xl' onClick={()=>setShowPassword((prev)=>!prev)}>
                <span>
                  {
                    showPassword ?(
                      <FaEye />
                    ):(
                      <FaEyeSlash />
                    )
                  }
                </span>
                
              </div>
            {error.passwordError && <div className='alert alert-danger mt-3'>{error.passwordError}</div>}
            </div>            
          </div>
          <div className='form-group mt-3'>
            <button type='submit' className='btn btn-lg btn-primary w-100'>Login</button>
          </div>
          {/* {error.generalError && <div className='alert alert-danger mt-3'>{error.generalError}</div>} */}
        </form>
        </div>
        {/* <div className='mt-5 d-flex justify-content-center'>
          <div>
            <h3>Users:</h3>
            <ul>
              {
                users.map((user,index)=>{
                  return(
                    <li key={index}>
                      <p>Username:{user.username}</p>
                      <p>Password:{user.password}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>          
        </div> */}
        
        {/* <div>
          <p>Username:{data.username}</p>
          <p>Password:{data.password}</p>
        </div> */}
      </div>
    )
}

export default Login

