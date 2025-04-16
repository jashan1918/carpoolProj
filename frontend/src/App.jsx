import './App.css'

import {Routes , Route} from 'react-router-dom'

import Homepage from './Pages/Homepage'
import Ride from './Pages/Ride/Ride'
import Login from './Pages/login/login'
import Signup from './Pages/signup/signup'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Ride" element={<Ride />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  
    </>
  )
}

export default App
