// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from 'react'


function App() {
   
  const[mode, setMode] = useState('light')
 
const toggleMode = ()=>{

  if(mode==='light'){

    setMode('dark')

    document.body.style.backgroundColor = '#123150'
  }
  else{
    setMode('light')
    
    document.body.style.backgroundColor = 'white'
  }
}

  return (

<>


<Navbar title = "Test-Mod" about = "Details " mode ={mode} toggleMode={toggleMode}/>  

<div className='container my-3' >


<Textform name = "Enter your text below" mode={mode}/>

{/* <About/> */}
</div>

</>
  );
}

export default App;