'use client'

import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import DropdownItem from '../components/dropdown-item'
import { DropdownProps } from '@/types/templates'
import React, { useState } from 'react'
import { tw } from '@/lib/utils/tw'

const Dropdown: React.FC<DropdownProps> = ({ options, label, className, children, onSelect }) =>
{
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () =>
    setIsOpen((prev) => !prev)

  const handleSelect = (id: string) =>
  {
    if (onSelect)
      onSelect(id)
  }

  return (
    <Menu>
      <MenuButton
        onClick={handleClick}
        className={tw(
          "inline-flex items-center gap-2 rounded-md bg-light-background/70 dark:bg-dark-background/70 py-1.5 px-3 text-sm/6 font-semibold text-text focus:outline-none data-[open]:bg-light-secondary/70 dark:data-[open]:bg-dark-secondary/70 data-[focus]:outline-1 data-[focus]:outline-black dark:data-[focus]:outline-white",
          className
        )}
      >
        {label}
        {children}
        <ChevronRightIcon
          className={tw(
            "text-light-text dark:text-dark-text size-4 transition-transform duration-200",
            { "rotate-90": isOpen }
          )}
        />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="min-w-48 origin-top-right rounded-xl border text-light-text dark:text-dark-text border-light-text/5 bg-light-background dark:bg-dark-background p-1 text-sm/6transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {options.map((item, index) => (
          <DropdownItem
            key={`dropdown-item-${item.label}-${index}`}
            onSelect={handleSelect}
            {...item}
          />
        ))}
      </MenuItems>
    </Menu>
  )
}

export default Dropdown
