'use client'

import { HeaderSideMenuCloseButtonProps } from '@/types/components'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const HeaderSideMenuCloseButton: React.FC<HeaderSideMenuCloseButtonProps> = ({ onClose, className }) =>
{
  return (
    <div className="flex px-4 pb-2 pt-5">
      <button
        type="button"
        onClick={onClose}
        className={tw(
          "relative -m-2 inline-flex items-center justify-center rounded-md p-2",
          "text-gray-400 hover:text-gray-600",
          className
        )}
        aria-label="Cerrar menú"
      >
        <span className="absolute -inset-0.5" />
        <XMarkIcon
          className="size-6"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

export default HeaderSideMenuCloseButton
