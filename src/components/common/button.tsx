import { ButtonProps } from '../../types/helper';

const Button = ({ bgColor, textColor, icon, animation, content, extraStyle, onClick }: ButtonProps) => {
  return (
    <button className={`w-full px-2 lg:px-8 py-2 ${bgColor} ${textColor} ${animation} font-medium rounded-lg cursor-pointer ${extraStyle} flex items-center justify-center gap-2`} onClick={onClick}>
      {content}
      {icon && icon}
    </button>

  )
}

export default Button;