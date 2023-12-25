
import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './Components/Navitems.jsx'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      <Navitems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
