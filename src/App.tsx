import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div   className="App">
      <div   className="bgimage"/>
      <p className='love'>I LOVE YOU</p>
      <img src={require('./images/2.jpeg').default} className='img1'/>
    </div>
  );
}

export default App;
