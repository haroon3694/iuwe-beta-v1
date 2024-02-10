import logo from '../../assets/images/logo_white.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'

const Footer = () => {

    const socialMedia = [
        {
            id: 0,
            icon: instagram,
            link: 'https://www.instagram.com/iuwe.in?igsh=MWVyN3IyYjZwYm00Yw==',
        },
        {
            id: 1,
            icon: linkedin,
            link: 'https://www.linkedin.com/company/iuwe-in/',
        },
    ];

    const onLinkClick = (linkUrl: string) => {
        const link = document.createElement("a");
        link.href = linkUrl;
        link.target = 'blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className='w-full px-8 lg:px-[10vh] xl:px-[20vh] pb-8 md:pb-[7rem]'>
        <div className='w-full rounded-[15px] bg-[color:var(--primary-color)]'>
            <div className='w-full flex justify-between items-end p-6 pt-[7rem]'>
                <div className='w-fit flex flex-col text-white'>
                    <img src={logo} className="w-[90px]" alt="" />
                    <p className="text-[12px] mt-2">All rights reserved @2023</p>
                </div>
                <div className='w-fit flex gap-6 items-end'>
                    {
                        socialMedia.map((data) => (
                            <span key={data?.id} className='w-[40px] flex justify-end items-center' onClick={() => onLinkClick(data?.link)}>
                                <img src={data?.icon} className='w-[25px] hover:w-[30px] transition-all duration-200 ease-in-out' alt="" />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer