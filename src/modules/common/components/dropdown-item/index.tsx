'use client'

import { DropdownButtonContentProps, DropdownItemProps } from '@/types/components'
import DropdownButtonContent from '../dropdown-button-content'
import { MenuItem } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const DropdownItem: React.FC<DropdownItemProps> = ({ label, action, className, href, icon, shortcut, id, onSelect }) =>
{
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
  {
    event.preventDefault()

    if (href)
      router.push(href)

    if (onSelect)
      onSelect(id)
  }

  const buttonProps =
  {
    role: 'menuitem',
    className: tw(
      'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3',
      'data-[focus]:bg-black/10 dark:data-[focus]:bg-white/10',
      className
    )
  }

  const buttonContentProps: DropdownButtonContentProps =
  {
    icon,
    label,
    shortcut,
  }

  return (
    <MenuItem>
      {action ? (
        <form action={action}>
          <button
            type="submit"
            {...buttonProps}
          >
            <DropdownButtonContent {...buttonContentProps} />
          </button>
        </form>
      ) : (
        <button
          onClick={handleClick}
          {...buttonProps}
        >
          <DropdownButtonContent {...buttonContentProps} />
        </button>
      )}
    </MenuItem>
  )
}

export default DropdownItem
