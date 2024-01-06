import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App=()=> {
   const[progress,setProgress]=useState(0)
    return (
      <div>
        <Navbar/>
       <LoadingBar
         color='#f11946'
         progress={progress}
       />
       <News setProgress={setProgress}/>
      </div>
    )
}

export default App