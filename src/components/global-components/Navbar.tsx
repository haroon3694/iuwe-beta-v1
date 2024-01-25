import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo_white.svg'
import menu from '../../assets/icons/menu.svg'
import { useState } from "react";
import { useRecoilState } from "recoil";
import sidebarToggleAtom from "../../recoil/sidebarToggleAtom";
import { Link as ScrollLink,  animateScroll as scroll } from 'react-scroll'

const Navbar = () => {

    const { pathname } = useLocation();

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

    const [_sidebarToggle, setSidebarToggle] = useRecoilState<boolean>(sidebarToggleAtom)

    const [navBg, setNavBg] = useState<boolean>(false);

    const changeNavBg: () => void = () => {
        window.scrollY >= 650 ? setNavBg(true) : setNavBg(false);
    }

    window.addEventListener('scroll', changeNavBg);

    return (
        <>
            {/* desktop navbar */}
            <div className={`w-full hidden md:flex fixed justify-between top-o ${navBg ? 'bg-black' : 'bg-transparent'} transition-all duration-100 ease-in-out px-6 md:px-[4rem] lg:px-[8rem] py-6 z-[100] pt-8`}>
                <div className="w-fit">
                    <Link to={`/`} onClick={scrollToTop}>
                        <img src={logo} className="w-[120px]" alt="" />
                    </Link>
                </div>
                <div className="w-fit flex gap-16 items-center">
                    {
                        navData?.routes?.map((data) => (
                            <ScrollLink to={data?.scroll_link} smooth={true} duration={500} className=""><p className={`text-[14px] text-gray-500 hover:text-white font-manrope font-[700] ${pathname == data?.route ? 'font-[] text-white' : ''}`}>{data?.title}</p></ScrollLink>
                        ))
                    }
                </div>
            </div>

            {/* mobile hamburger */}
            <div className={`w-full flex md:hidden fixed justify-between top-o ${navBg ? 'bg-black' : 'bg-transparent'} transition-all duration-100 ease-in-out px-6 md:px-[4rem] lg:px-[8rem] py-6 z-[100] pt-8`}>
                <div className="w-fit">
                    <Link to={`/`}>
                        <img src={logo} className="w-[120px]" alt="" />
                    </Link>
                </div>
                <div className="w-full flex justify-end md:hidden">
                    <span className="rounded-full bg-black p-3">
                        <img src={menu} onClick={() => setSidebarToggle(true)} className="w-[35px]" alt="" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar