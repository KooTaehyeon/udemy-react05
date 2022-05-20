import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagragh, setShowParagragh] = useState(false);
  const toggleBtn = () => {
    setShowParagragh((prevshowParagragh) => !prevshowParagragh);
  };
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagragh && <p>This is new!</p>}
      <Button onClick={toggleBtn}>Show Paragragh</Button>
    </div>
  );
}

export default App;
