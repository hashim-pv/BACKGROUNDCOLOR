

import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
   <>

      <div className='container' style={{ backgroundColor: bgColor }}>

        <button className='btn' onClick={() => changeColor('brown')}>BROWN</button>
        <button className='btn' onClick={() => changeColor('green')}>GREEN</button>
        <button className='btn' onClick={() => changeColor('silver')}>SILVER</button>
        <button className='btn' onClick={() => changeColor('orange')}>ORANGE</button>
      </div>
   </>
  );
}

export default App;
