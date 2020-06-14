import React, { useState } from 'react';
//import logo from './logo.svg';
import {Message} from "./Message";
import './App.css';

function App() {
  
    let [count,setCount]=useState(1);
    let [isMorning,setMorning]=useState(false);


    return (
      <div className={`box ${isMorning?'daylight':''}`}> 
      <h1>Good {isMorning?"Morning":"Night"}</h1>
        <Message counter={count}/>
        <br />
        <button onClick={
          ()=>setCount(count+1)
          }>
          Update Counter
        </button>

        <button onClick={()=>setMorning(!isMorning)}>
          Switch Between Day/Night
        </button>

      </div>
  );
}

export default App;
/**
 * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
    </div>
     */
