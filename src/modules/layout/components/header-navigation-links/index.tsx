'use client'

import { HeaderNavigationLinksProps } from '@/types/components'
import HeaderNavigationLink from '../header-navigation-link'
import React from 'react'

const HeaderNavigationLinks: React.FC<HeaderNavigationLinksProps> = ({ navigation }) =>
{
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.map((item) => (
          <HeaderNavigationLink
            key={`header-page-link-${item.label}`}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default HeaderNavigationLinks
