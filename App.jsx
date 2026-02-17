import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './src/Pages/Home.jsx'
import Menue from './src/Pages/Menue.jsx'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Menue' element={<Menue />} />
    </Routes>
  )
}

export default App