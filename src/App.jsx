import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <div className=" min-h-screen overflow-hidden">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
            theme: {
              primary: '#10b981',
            },
          },
        }}
      />
    </div>
  )
}

export default App
