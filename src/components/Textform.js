import React, { useState } from 'react'

export default function Textform(props) {
  
const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success")
}    

const handleLoClick = ()=>{
  // console.log("Lowercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase!","success")
}   

const handleClearlClick = ()=>{
  let newText = '';
  setText(newText)
  props.showAlert("Text Clear","success")
}   
const handleExtraSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra space","success")
  
}   

const handleCopy = ()=>{ 
  navigator.clipboard.writeText(text);
  props.showAlert("copied to clipborad","success")
}

const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value);

}
const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} 
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearlClick}>Clear Text</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
       
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  ); 
}
