import React, {useState} from 'react'

export default function TextForm (props){
  
    const handleUpperCase=()=>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowerCase=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
     }
     
     const handleClear=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!", "success");
     }
     const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
     }
     const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
     }


    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const[text,  setText] = useState('');
   
    return (
    <>
    <div className="contianer"style={{ color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
         <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" style={{
            backgroundColor: props.mode==='dark'?'#343a40':'white',
            color:props.mode==='dark'?'white':'black'
         }}>
         </textarea>
        </div>  
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase} >UpperCase </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase} >LowerCase </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear All </button>
    </div>
    <div className="container my-2"style={{
            color:props.mode==='dark'?'white':'black'
         }}>
        <h1>Your Text Summary</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p> {0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minute Read</p>
        <h3> Preview </h3>
        <p>{text.length>0?text:"Nothing to Preview "}</p>
    </div>

    </>
  )
}  
