import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/global-components/Navbar"
import Footer from "./components/global-components/Footer"
import Sidebar from "./components/global-components/Sidebar"
import UnderDev from "./components/global-components/UnderDev"

function App() {

  const location = useLocation();

  return (
    <div className='relative'>
      {
        location.pathname === '/under-dev' ?
          null
          :
          <Navbar />
      }
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/under-dev" element={<UnderDev />} />
          <Route path="*" element={<Navigate to="/under-dev" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
