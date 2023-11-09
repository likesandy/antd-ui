import cn from 'classnames'
import './index.css'

interface ButtonProps {
  backgroundColor?: string
  type?: 'primary' | 'dashed' | 'text' | 'link' | 'normal'
  children?: React.ReactNode
  onClick?: () => void
}

export const Button = ({ type = 'normal', backgroundColor, children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn({
        'ant-btn': true,
        [`ant-btn-${type}`]: type,
      })}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  )
}

