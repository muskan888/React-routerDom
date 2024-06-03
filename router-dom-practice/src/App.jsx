import { useState,lazy,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))
function App() {
  return (
    <div>  

    <BrowserRouter>
    <Appbar/>


   
    <Routes>
   
      <Route path="/dashboard" element={ <Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
      <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
    </Routes>
    
    
    </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate=useNavigate();
  return  <div>
  <button onClick={()=>{
    navigate("/");
  }}>Landing page </button>
  <button onClick={()=>{
    navigate("/dashboard");
  }}>Dashboard  </button>
  </div>
}
export default App
