// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {
  return (

<>


<Navbar title = "Test-Mod" about = "Details "/>  

<div className='container my-3' >


<Textform name = "Enter your text below"/>

{/* <About/> */}
</div>

</>
  );
}

export default App;