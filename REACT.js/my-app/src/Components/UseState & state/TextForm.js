import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
      // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  } 

  
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }

    const handleOnChange = (event) =>{
        // console.log("On Changed");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text" //Wrong way to change the state
    // setText("new text"); //Correct way to change the state

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="myBox" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"> </textarea>
  </div>
  <button className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characeters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}