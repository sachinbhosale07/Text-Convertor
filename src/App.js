import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import Texform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Rounter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled  or  not
  const [alert, setAlert] = useState(null);

const showAlert=(meassage, type)=> {
    setAlert({
      msg: meassage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

// const removeBodyClasses = ()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
  
// }

// const toggleMode = (cls)=>{
const toggleMode = ()=>{
  // removeBodyClasses();
  // console.log(cls)
  // document.body.classList.add('bg-'+cls)
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled","success");
  // document.title = "TextUtils - Dark Mode";
  // setInterval(() => {
  //   document.title = "TextUtils is Amazing ";
  // },2000);
  // setInterval(() => {
  //   document.title = "TextUtils Install now ";
  // },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled","success");
    // document.title = "TextUtils - light Mode";
    }
}
  return (
    <>
     <Rounter>
      <Navbar title="Text Convertor" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<Texform showAlert={showAlert} heading="Try Text Convertor - Words Counters, Character Counter, Remove extra Spaces" mode={mode} />}> 
          </Route>
     </Routes>
      </div>
      </Rounter>
    
    </>
  );
}

export default App;
