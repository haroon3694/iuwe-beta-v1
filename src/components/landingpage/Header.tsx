import React from 'react'

interface HeaderProps {
    title: string;
    backgroundColor: string;
    textColor: string;
}

const Header: React.FC<HeaderProps> = ({ title, backgroundColor, textColor }) => {
    return (
        <div className={`w-full bg-[${backgroundColor}] col-start-1 row-end-2 rounded-[15px] px-5 md:px-10 py-5 md:py-8 `}>
            <h1 className={`text-${textColor} text-2xl md:text-4xl font-[600] font-montserat`}>{title}</h1>
        </div>
    )
}

export default Header