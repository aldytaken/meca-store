'use client'

import { HeaderSideMenuLinksProps } from '@/types/components'
import HeaderNavigationLink from '../header-navigation-link'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const HeaderSideMenuLinks: React.FC<HeaderSideMenuLinksProps> = ({ navigation, className }) =>
{
  return (
    <nav
      className={tw(
        "space-y-6 border-t px-4 py-6",
        "border-light-background dark:border-dark-background",
        className
      )}
    >
      {navigation.map((item) => (
        <HeaderNavigationLink
          key={`header-side-menu-link-${item.label}`}
          {...item}
        />
      ))}
    </nav>
  )
}

export default HeaderSideMenuLinks
