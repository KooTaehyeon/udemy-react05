import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/Demo';
function App() {
  const [showParagragh, setShowParagragh] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleBtn = useCallback(() => {
    if (allowToggle) {
      setShowParagragh((prevshowParagragh) => !prevshowParagragh);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle((prevallowToggle) => !prevallowToggle);
  };
  console.log(allowToggle);

  console.log('app Running');
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagragh} />
      <Button onClick={allowToggleHandler}>Allow Togglin</Button>
      <Button onClick={toggleBtn}>Show Paragragh</Button>
    </div>
  );
}

export default App;
