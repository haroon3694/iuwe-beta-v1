import logo from '../../assets/images/logo_white.svg'

const Footer = () => {
  return (
    <div className='w-full px-8 lg:px-[10vh] xl:px-[20vh] pb-[5rem] md:pb-[7rem]'>
        <div className='w-full rounded-[15px] bg-[color:var(--primary-color)]'>
            <div className='w-full flex justify-between items-end p-6 pt-[7rem]'>
                <div className='w-fit flex flex-col text-white'>
                    <img src={logo} className="w-[110px]" alt="" />
                    <p className="text-[12px] mt-2">All rights reserved @2023</p>
                </div>
                <div className='w-fit flex gap-3 items-center'>
                    {
                        [1, 2, 3].map((data) => (
                            <span key={data} className='w-5 h-5 rounded-full bg-[#373737]'></span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer