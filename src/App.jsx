import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <div className=" min-h-screen overflow-hidden">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
