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


 const erasure = ()=>{

// let erase = window.location.reload()
let erase = ""
setText(erase)
return erase


 }
 const spacex = ()=>
{
  let space = text.split(/[  ]+/);

  setText(space.join(" "))
}


 const handlOnchange = function(event){

    setText(event.target.value)
    
 }


 
const[text, setText] = useState("Enter text here")




    return (
<>
<div className='container' 
  style= {{color :  props.mode==='dark'?"white" : "grey"}}>
<div className="mb-3">
<h1>  
    Welcome to the Text editor
</h1>

  <label htmlFor="Textbox" className="form-label">{props.name}</label>
  <textarea className="form-control" id="exammyboxpleFormControlTextarea1" 
  rows="8" value={text} onChange={handlOnchange}
  
  style= {{backgroundColor :  props.mode==='light'?"white" : "grey", color: props.mode==='dark'?"white" : "grey" }}>


  </textarea>

<button class="btn btn-primary mx-2" type="submit" onClick={handleUpclick}>

Convert to Upper-case

</button>

<button class="btn btn-primary mx-10" type="submit" onClick={erasure} >

Erase all

</button>

<button class="btn btn-primary mx-2" type="submit" onClick={handleDownclick}>

Convert to Lower-case

</button>

<button class="btn btn-primary mx-2" type="submit" onClick={spacex}>

Remove extra spaces

</button>

</div>
</div>

<div className='container' style= {{color :  props.mode==='dark'?"white" : "grey"}}>

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
<p> {text.length>0? text : "Enter your text to Preview"}</p>
</div>

</>
  )
}