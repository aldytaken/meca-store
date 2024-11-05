'use client'

import { HeaderNavigationItem } from '@/types/global'
import { tw } from '@/lib/utils/tw'
import Link from 'next/link'
import React from 'react'

const HeaderNavigationLink: React.FC<HeaderNavigationItem> = ({ href, label }) =>
{
  return (
    <Link
      href={href}
      className={tw(
        "flex items-center text-sm font-medium",
        "text-light-text/80 dark:text-dark-text/80 hover:text-light-text dark:hover:text-dark-text"
      )}
      aria-label={`Ir a ${label}`}
    >
      {label}
    </Link>
  )
}

export default HeaderNavigationLink
