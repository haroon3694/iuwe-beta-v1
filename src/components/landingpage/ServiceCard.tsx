import React from 'react'

interface ServiceCardProps {
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => {
    

    return (
        <div className="w-full max-w-[300px] lg:max-w-full sm:max-w-none aspect-square p-3 group">
            <div className='w-full h-full rounded-[16px] transition-all duration-200 ease-in-out hover:p-[6px] hover:rounded-[20px] bg-transparent hover:bg-black md:bg-black'>
                <div className="w-full h-full flex flex-col justify-center items-start p-4 md:p-6 bg-white rounded-[15px] z-10 relative transition-all duration-200 ease-in-out font-[500] md:font-[300] hover:font-[700] hover:tracking-tight hover:border-black">
                    <h1 className={`hidden md:block text-[34px] 2xl:text-[39px] leading-[44px] text-left text-wrap ${title?.length < 30 ? 'w-full max-w-[180px]' : 'w-full max-w-[270px] group-hover:max-w-[400px]'} `}>{title}</h1>
                    <h1 className={`hidden sm:block md:hidden text-[35px] leading-[24px] text-left text-wrap ${title?.length <= 20 ? 'w-full max-w-[150px]' : 'w-full max-w-[240px] group-hover:max-w-[400px]'} `}>{title}</h1>
                    <h1 className={`sm:hidden text-[22px] leading-[26px] text-left text-wrap ${title?.length > 20 ? 'w-full max-w-[120px]' : 'w-full max-w-[200px] group-hover:max-w-[400px]'} `}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard