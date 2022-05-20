import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/Demo';
function App() {
  const [showParagragh, setShowParagragh] = useState(false);
  const toggleBtn = () => {
    setShowParagragh((prevshowParagragh) => !prevshowParagragh);
  };
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagragh} />
      <Button onClick={toggleBtn}>Show Paragragh</Button>
    </div>
  );
}

export default App;
