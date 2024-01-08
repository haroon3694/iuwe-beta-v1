import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/global-components/Navbar"
import Footer from "./components/global-components/Footer"
import Sidebar from "./components/global-components/Sidebar"

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
