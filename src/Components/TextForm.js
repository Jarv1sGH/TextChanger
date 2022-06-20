import React, {useState} from 'react'

export default function TextForm (props){
   
    const handleUpperCase=()=>{
       let newText = text.toUpperCase();
       setText(newText);
      //  props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowerCase=()=>{
        let newText = text.toLowerCase();
        setText(newText);
      //   props.showAlert("Converted to Lowercase!", "success");
     }
     
     const handleClear=()=>{
        let newText = '';
        setText(newText);
      //   props.showAlert("Cleared!", "success");
     }
     const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
     }
     const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
      //   props.showAlert("Extra Spaces Removed!", "success");
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
        <button className="btn btn-primary mx-2" onClick={handleUpperCase} >UpperCase </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase} >LowerCase </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} > Remove Extra Spaces </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy </button>
        <button className="btn btn-primary mx-2" onClick={handleClear} >Clear All </button>
    </div>
   {/* This is to add a dropdown menu for multiple buttons using if-else  */}

    {/* <div className="Selcontainer"style={{color:props.mode==='dark'?'white':'black' }} >
    <label id="label" htmlFor="mySelect">  Select Your Function Here  </label>

         <select name="mySelect" id="select" style={{
            backgroundColor: props.mode==='dark'?'#343a40':'white',
            color:props.mode==='dark'?'white':'black'
         }}>
            
         <option  value="">select</option>   
         <option value="UpperCase" >UpperCase</option>
         <option value="LowerCase">LowerCase</option>
         <option value="Clear">Clear</option>
         </select> 
    </div> */} 
  
    <div className="container my-2"style={{
            color:props.mode==='dark'?'white':'black'
         }}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length-1} word and {text.length} characters</p>
        <p> {0.008 * (text.split(" ").length-1)} Minute Read</p>
        <h3> Preview </h3>
        <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>

    </>
  )
}
