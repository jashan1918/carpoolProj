import './App.css'

import {Routes , Route} from 'react-router-dom'

import Homepage from './Pages/Homepage'
import Ride from './Pages/Ride/Ride'
import Login from './Pages/login/login'
import Signup from './Pages/signup/signup'
import Drive from './Pages/Drive/Drive'
import BecomeDriver from './Pages/becomeDriver/becomeDriver.jsx'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Ride" element={<Ride />} />
      <Route path="/Drive" element={<Drive/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/becomeDriver" element={<BecomeDriver />} />
    </Routes>
  
    </>
  )
}

export default App
