import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils-Home(Dark Mode)';
      // setInterval(() => {
      // document.title = 'Are you alone??' = Flash this info at the top & bad user experience
      // },1000 )
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils-Home(Light Mode)';
    }
  }
  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className="container my-3">
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/">
     <TextForm showAlert={showAlert} heading="Enter the text to analyze below : " mode={mode}/> 
     </Route>
   </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
