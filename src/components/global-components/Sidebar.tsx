import { useRecoilState } from "recoil"
import sidebarToggleAtom from "../../recoil/sidebarToggleAtom"
import cross from '../../assets/icons/cross.svg'
import logo from '../../assets/images/logo_white.svg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Sidebar = () => {

  const [sidebarToggle, setSidebarToggle] = useRecoilState<boolean>(sidebarToggleAtom);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  const navData = {
    logoText: 'iuwe.',
    routes: [
      {
        id: 0,
        title: 'Case Studies',
        route: '/case-studies',
        scroll_link: 'case-studies',
      },
      {
        id: 1,
        title: 'Services',
        route: '/about',
        scroll_link: 'services',
      },
      {
        id: 2,
        title: 'Contact Us',
        route: '/contact',
        scroll_link: 'contact',
      },
    ],
  };

  return (
    <>
      <div className={`block md:hidden translate-x-1 bg-black fixed right-0 z-[100] transition-all duration-150 rounded-l-[15px] ease-in-out ${sidebarToggle ? 'w-[88vw] h-screen' : 'w-0 h-0 overflow-hidden'}`}>
        <div className="w-full flex justify-start px-6 mt-8">
          <img src={cross} className="w-[40px]" onClick={() => setSidebarToggle(false)} alt="" />
        </div>
        <div className="w-full flex justify-center items-center mt-[100px]">
          <div className="w-fit">
              <img src={logo} className="w-[120px]" alt="" onClick={() => {
                scrollToTop();
                setSidebarToggle(false);
              }} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-6">
          {
            navData?.routes?.map((data) => (
              <ScrollLink to={data?.scroll_link} smooth={true} duration={500} onClick={() => setSidebarToggle(false)} className="cursor-pointer"><p className="text-[25px] font-[500] text-gray-200">{data?.title}</p></ScrollLink>
            ))
          }
        </div>
      </div>
      <div className={`w-[100vw] h-screen z-30 opacity-0 fixed inset-0 bg-red-300 ${sidebarToggle ? 'block' : 'hidden'}`} onClick={() => setSidebarToggle(false)} />
    </>
  )
}

export default Sidebar