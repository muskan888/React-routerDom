import { useState,lazy,Suspense, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CountContext } from './components/context'
const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))
function App() {
  const [count,setCount]=useState(0);
  return (
    <div>  

    <BrowserRouter>
    <Appbar/>


   
    <Routes>
   
      <Route path="/dashboard" element={ <Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
      <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
      //wrap inside a provider
      <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    

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
function Count({setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  const count=useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count=useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
