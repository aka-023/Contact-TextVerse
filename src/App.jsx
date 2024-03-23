import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Pics2 from './components/Pics2';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = " #1a1a1a";
      document.body.style.color = 'white';
      // showAlert(" Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      // showAlert(" Light mode has been enabled ","success");
    }
  }

  return (
      <div className="app-container"> 
        <Navbar title="TextVerse" mode={mode} toggleMode={toggleMode} />
        {
            <>
            <div className="contact-content">
              <Contact/>
              <Pics2/>
              </div>
            </>
          }
          <Footer mode={mode}/>
        </div>
  );
}

export default App;