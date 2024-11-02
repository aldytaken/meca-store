'use client'

import { DropdownIconProps } from '@/types/components'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const DropdownIcon: React.FC<DropdownIconProps> = ({ icon, className, children }) =>
{
  if (!icon && !children)
    return null

  return (
    <>
      {children ? (
        children
      ) : (
        <span
          aria-hidden="true"
          className={tw(
            "size-4",
            className,
          )}
        >
          {icon}
        </span>
      )}
    </>
  )
}

export default DropdownIcon
