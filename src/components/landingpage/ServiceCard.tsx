import React from 'react'

interface ServiceCardProps {
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => {
    return (
        <div className="w-full aspect-square p-3">
            <div className="w-full h-full flex flex-col justify-start items-center p-6 bg-white rounded-[15px]">
                <h1 className="text-[30px] font-[600] leading-[36px] text-left text-wrap">{title}</h1>
            </div>
        </div>
    )
}

export default ServiceCard