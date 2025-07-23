import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'
import Urlshortner from './Components/Urlshortnerpage/Urlshortner'


function App() {
  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Urlshortner/>} />

      </Routes>
    </BrowserRouter>
    
     

    </>
  )
}

export default App


