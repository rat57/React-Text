
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //check dark mode is enable or not
  const [darkMode, setDarkMode] = React.useState(false);
  //const [infoMode, setinfoMode] = React.useState(false);
  const [alert, setAlert] = React.useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      showAlert("success", "Dark mode is on now");
    } else {
      setMode("light");
      showAlert("success", "Light mode is on now");
    }
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  }


  const themeinfo = () => {
    console.log("Info");
    document.body.classList.remove(
      'light-mode',
      'dark-mode',
      'danger-mode',
      'success-mode',
    );
    setMode("info");
    document.body.classList.add('info-mode');
  }

  const themelight = () => {
    console.log("light");
    document.body.classList.remove(
      'info-mode',
      'dark-mode',
      'danger-mode',
      'success-mode',
    );
    document.body.classList.add('light-mode');
    setMode("light");
  }

  const themeDark = () => {
    console.log("light");
    document.body.classList.remove(
      'info-mode',
      'light-mode',
      'danger-mode',
      'success-mode',
    );
    document.body.classList.add('dark-mode');
    setMode("dark");
  }

  const themeDanger = () => {
    console.log("light");
    document.body.classList.remove(
      'info-mode',
      'light-mode',
      'dark-mode',
      'success-mode',
    );
    document.body.classList.add('danger-mode');
    setMode("danger");
  }

  const themeSuccess = () => {
    console.log("light");
    document.body.classList.remove(
      'info-mode',
      'light-mode',
      'dark-mode',
      'danger-mode',
    );
    document.body.classList.add('success-mode');
    setMode("success");
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutiles" aboutText="About Us" mode={mode} toggleMode={toggleMode} themeinfo={themeinfo} themelight={themelight} themeDark={themeDark} themeDanger={themeDanger} themeSuccess={themeSuccess} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>






      {/* <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter> */}
    </>
  );
}

export default App;

