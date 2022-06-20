// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About'; 
import TextForm from './Components/TextForm'; 
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //Wether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode = ()=>{
    if (mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
//     <Router>
    <Navbar title = "TextChanger" AboutText = "About TextChanger" mode={mode}
    toggleMode={toggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
      <TextForm showAlert = {showAlert}heading = "Enter Text to analyze below "mode={mode}  />

//     <Routes>
//           <Route exact path="/"element = {<TextForm showAlert = {showAlert}heading = "Enter Text to analyze below "mode={mode}  />}/>
//           <Route exact path="/about" element = {<About />}/>
            
          
//      </Routes>
    </div>
//     </Router>
    </> 
  );
}

export default App;
