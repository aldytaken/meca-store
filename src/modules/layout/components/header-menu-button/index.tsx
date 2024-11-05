'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { ClickHandler } from '@/types/global'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const HeaderMenuButton: React.FC<ClickHandler> = ({ onClick, className }) =>
{
  return (
    <button
      type="button"
      onClick={onClick}
      className={tw(
        "relative rounded-md p-2 lg:hidden",
        "text-light-secondary dark:text-dark-secondary",
        className
      )}
      aria-label="Abrir menú lateral"
    >
      <Bars3Icon
        className="size-6"
        aria-hidden="true"
      />
    </button>
  )
}

export default HeaderMenuButton
