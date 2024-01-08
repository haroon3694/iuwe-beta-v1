import React from 'react'

interface PrimaryButtonProps {
    title: string;
    bgColor: string;
    textColor: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, bgColor, textColor }) => {
  return (
    <button className={`bg-${bgColor} text-${textColor} py-2 px-14 rounded-[7px] font-manrope hover:bg-${textColor} hover:text-${bgColor} font-[600] transition-all duration-150 ease-in-out active:scale-95`}>{title}</button>
  )
}

export default PrimaryButton