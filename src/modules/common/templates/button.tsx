'use client'

import { Button as _Button, ButtonProps as _ButtonProps } from '@headlessui/react'
import { ButtonProps } from '@/types/templates'
import { useRouter } from 'next/navigation'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const Button: React.FC<ButtonProps & _ButtonProps> = ({ className, href, action, style, children, label, ...props }) =>
{
  const router = useRouter()

  const handleClick = () =>
  {
    if (href)
      router.push(href)
  }

  const custom = tw(
    { "bg-light-primary dark:bg-dark-primary": style === 'primary' },
    { "bg-light-secondary dark:bg-dark-secondary": style === 'secondary' },
    { "bg-light-danger dark:bg-dark-danger": style === 'danger' },
    { "bg-light-success dark:bg-dark-success": style === 'success' },
  )

  const buttonProps =
  {
    role: 'button',
    className: tw(
      "inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner",
      custom,
      className
    ),
    ...props
  }

  return action ? (
    <form action={action}>
      <button 
        type="submit" 
        {...buttonProps}
      >
        {label || children}
      </button>
    </form>
  ) : (
    <_Button
      onClick={handleClick}
      {...buttonProps}
    >
      {label || children}
    </_Button>
  )
}

export default Button
