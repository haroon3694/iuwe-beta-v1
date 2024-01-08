import { useRecoilState } from "recoil"
import sidebarToggleAtom from "../../recoil/sidebarToggleAtom"
import cross from '../../assets/icons/cross.svg'

const Sidebar = () => {

    const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarToggleAtom)

  return (
      <div className={`translate-x-1 bg-[color:var(--primary-color)] fixed right-0 z-[100] transition-all duration-150 rounded-l-[15px] ease-in-out ${sidebarToggle ? 'w-[80vw] h-screen' : 'w-0 h-0 overflow-hidden'}`}>
        <div className="w-full flex justify-start px-6 mt-8">
        <img src={cross} className="w-[40px]" onClick={() => setSidebarToggle(false)} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center mt-[200px] gap-6">
            <h1 className="text-[40px] font-[500] text-white">Case Studies</h1>
            <h1 className="text-[40px] font-[500] text-white">About Us</h1>
            <h1 className="text-[40px] font-[500] text-white">Contact Us</h1>
        </div>
    </div>
  )
}

export default Sidebar