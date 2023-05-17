import React, {useState} from 'react'



export default function Textform(props) {
 
 const handleUpclick = function(){
setText("upclick fired")
let newText = text.toUpperCase()
setText(newText)
 }

 const handleDownclick = ()=>{

    let downtext = text.toLowerCase()

    setText(downtext)
 }
 
 const handlOnchange = function(event){

    setText(event.target.value)
    
 }


 
const[text, setText] = useState("Enter text here")

// const[color, setColor] = useState()



    return (
<>
<div className='container'>
<div className="mb-3">
<h1>  
    Welcome to the Text editor
</h1>

  <label htmlFor="Textbox" className="form-label">{props.name}</label>
  <textarea className="form-control" id="exammyboxpleFormControlTextarea1" rows="8" value={text} onChange={handlOnchange}></textarea>

<button class="btn btn-primary mx-2" type="submit" onClick={handleUpclick}>

Convert to Upper-case

</button>


<button class="btn btn-primary mx-2" type="submit" onClick={handleDownclick}>

Convert to Lower-case

</button>


{/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={dark}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
</div> */}

</div>
</div>

<div className='container'>

<h2>
Text analyser  
</h2>
<p>
{text.length} number of characters typed and {text.split(" ").length} number of words typed
</p>
<p>
{0.03* text.split(" ").length} number of words read per minute
</p>
<h2>
  Text Preview
</h2>
<p> {text}</p>
</div>

</>
  )
}