import React from 'react'

interface ServiceCardProps {
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => {
    return (
        <div className="w-full aspect-square p-3 group">
            <div className='w-full h-full rounded-[16px] transition-all duration-200 ease-in-out hover:p-[6px] hover:rounded-[20px] bg-black'>
                <div className="w-full h-full flex flex-col justify-center items-start p-6 bg-white rounded-[15px] z-10 relative transition-all duration-200 ease-in-out font-[300] hover:font-[600] hover:tracking-tight hover:border-black">
                    <h1 className={`text-[39px] leading-[44px] text-left text-wrap ${title?.length < 30 ? 'w-full max-w-[200px]' : 'w-full max-w-[270px] group-hover:max-w-[400px]'}`}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard