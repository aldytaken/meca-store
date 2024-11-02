'use client'

import { DropdownShortcutProps } from '@/types/components'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const DropdownShortcut: React.FC<DropdownShortcutProps> = ({ shortcut, className }) =>
{
  return (
    <kbd className={tw(
      "ml-auto hidden font-sans text-xs group-data-[focus]:inline",
      "text-light-text/50 dark:text-dark-text/50",
      className
      )}>
      {shortcut}
    </kbd>
  )
}

export default DropdownShortcut
