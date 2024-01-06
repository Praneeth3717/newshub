import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {HashRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react';

const App=()=> {
  const[progress,setProgress]=useState(0)
    return (
      <HashRouter basename='/newshub'>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path='/newshub' exact element={<News setProgress={setProgress} key="general" category="general"/>}></Route>
        <Route path='/business' exact element={<News setProgress={setProgress} key="business" category="business"/>}></Route>
        <Route path='/entertainment' exact  element={<News  setProgress={setProgress} key="entertainment" category="entertainment"/>}></Route>
        <Route path='/health' exact  element={<News setProgress={setProgress} key="health" category="health"/>}></Route>
        <Route path='/science' exact  element={<News setProgress={setProgress} key="science" category="science"/>}></Route>
        <Route path='/sports' exact  element={<News setProgress={setProgress} key="sports" category="sports"/>}></Route>
        <Route path='/technology'  exact  element={<News setProgress={setProgress} key="technology" category="technology"/>}></Route>
      </Routes>
      </HashRouter>
    )
}

export default App