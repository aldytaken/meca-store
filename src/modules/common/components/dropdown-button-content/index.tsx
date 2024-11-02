'use client'

import { DropdownButtonContentProps } from '@/types/components'
import DropdownShortcut from '../dropdown-shortcut'
import DropdownIcon from '../dropdown-icon'
import React from 'react'

const DropdownButtonContent: React.FC<DropdownButtonContentProps> = ({ icon, shortcut, label }) =>
{
  return (
    <>
      {icon && <DropdownIcon icon={icon} />}
      {label}
      {shortcut && <DropdownShortcut shortcut={shortcut} />}
    </>
  )
}

export default DropdownButtonContent
