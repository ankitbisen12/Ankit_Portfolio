import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  textColor: string;
  content: string;
  bgColor?: string;
  icon?: React.ReactNode;
  animation?: string;
  extraStyle?: string;
}

const Button = ({ bgColor, textColor, icon, animation, content, extraStyle }: ButtonProps) => {
  return (
    <button className={`w-full px-8 py-2 ${bgColor} ${textColor} ${animation} text-white font-medium rounded-lg shake-vertical cursor-pointer ${extraStyle} flex items-center justify-center gap-2`}>
      {content}
      {icon && icon}
    </button>

  )
}

export default Button;