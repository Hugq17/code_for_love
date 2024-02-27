import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import HappyNewYear from './Pages/HappyNewYear'
import HappyBirthDay from './Pages/HappyBirthDay'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/happy-new-year' element={<HappyNewYear />} />
        <Route path='/happy-birth-day' element={<HappyBirthDay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
