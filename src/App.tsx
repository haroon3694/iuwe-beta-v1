import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/global-components/Navbar"
import Footer from "./components/global-components/Footer"
import Sidebar from "./components/global-components/Sidebar"
import UnderDev from "./components/global-components/UnderDev"
import Preloader from "./components/global-components/Preloader"

function App() {

  const { pathname } = useLocation();

  return (
    <div className='relative'>
      <Preloader />
      {pathname === '/under-dev' ? null : <Navbar />}
      <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/under-dev" element={<UnderDev />} />
        <Route path="*" element={<Navigate to="/under-dev" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
