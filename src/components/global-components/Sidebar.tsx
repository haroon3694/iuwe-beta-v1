import { useRecoilState } from "recoil"
import sidebarToggleAtom from "../../recoil/sidebarToggleAtom"
import cross from '../../assets/icons/cross.svg'
import logo from '../../assets/images/logo_white.svg'
import { Link } from "react-router-dom"

const Sidebar = () => {

  const [sidebarToggle, setSidebarToggle] = useRecoilState<boolean>(sidebarToggleAtom)

  return (
    <div className={`block md:hidden translate-x-1 bg-black fixed right-0 z-[100] transition-all duration-150 rounded-l-[15px] ease-in-out ${sidebarToggle ? 'w-[80vw] h-screen' : 'w-0 h-0 overflow-hidden'}`}>
      <div className="w-full flex justify-start px-6 mt-8">
        <img src={cross} className="w-[40px]" onClick={() => setSidebarToggle(false)} alt="" />
      </div>
      <div className="w-full flex justify-center items-center mt-[100px]">
        <div className="w-fit">
          <Link to={`/`}>
            <img src={logo} className="w-[120px]" alt="" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[80px] gap-6">
        <Link onClick={() => setSidebarToggle(false)} to='/case-studies'><h1 className="text-[25px] font-[500] text-gray-200">Case Studies</h1></Link>
        <Link onClick={() => setSidebarToggle(false)} to='/about'><h1 className="text-[25px] font-[500] text-gray-200">About Us</h1></Link>
        <Link onClick={() => setSidebarToggle(false)} to='/contact'><h1 className="text-[25px] font-[500] text-gray-200">Contact Us</h1></Link>
      </div>
    </div>
  )
}

export default Sidebar