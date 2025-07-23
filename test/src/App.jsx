import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Urlshortner from './Components/Urlshortnerpage/Urlshortner'
import Urlshort from './Components/UrlshortList/Urlshort';

function App() {
  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Urlshortner/>} />
        <Route path="/urls" element={<Urlshort />} />
      </Routes>
    </BrowserRouter>
    
     

    </>
  )
}

export default App


