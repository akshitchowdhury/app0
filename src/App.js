// import logo from './logo.svg';
// import './App.css';
import About from './components/About'

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
   
  const[mode, setMode] = useState('light')
 
const [alert, setAlert] = useState(null)


const showAlert = (message,type)=>{
  setAlert({
  msg : message,
  type : type
})
setTimeout(()=>{
  setAlert(null)
},1500)
}

const toggleMode = ()=>{

  if(mode==='light'){

    setMode('dark')

    document.body.style.backgroundColor = '#123150'
    showAlert("Dark mode enabled", "success")
  }
  else{
    setMode('light')
    
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode enabled", "success")
  }
}

  return (

<>

<Router>
<Navbar title = "Test-Mod" about = "Details " mode ={mode} toggleMode={toggleMode}/>  
<Alert alert = {alert}> </Alert>

<div className='container my-3' >
         <Routes>
          <Route path="/about"
           element = {<About />} >
          </Route>
          </Routes>
          <Routes>
          <Route path="/" element = 
{<Textform name = "Enter your text below" mode={mode}/>} >
          </Route>
          </Routes>

 
</div>
</Router>
</>
  );
}

export default App;