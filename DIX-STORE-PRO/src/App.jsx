
import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './Components/Navitems.jsx'

function App() {
 

  return (
    <>
      <Navitems/>
      <Outlet/>
      
    </>
  )
}

export default App
