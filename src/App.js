import React,{useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
// import Footer from './components/footer'
import Home from "./pages/home"

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile,setIsMobile] = useState(window.innerWidth < 768);

  useEffect(()=>{
    const handleResize =()=>{
      setIsMobile(window.innerWidth < 768)
      
    };
    window.addEventListener('resize',handleResize)
    return()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])
  
  return (
    
      
     
    <div>
      <div>
        {isMobile ? (
          <Sidebar  />
        ) : (
          <Navbar  />
        )}
      </div>
      <Home />
      
    </div>
  )
}
export default App


