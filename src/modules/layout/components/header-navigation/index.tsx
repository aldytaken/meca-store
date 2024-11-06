'use client'

import { useHeaderContext } from '../../providers/HeaderProvider'
import HeaderNavigationLinks from '../header-navigation-links'
import HeaderMenuButton from '../header-menu-button'
import HeaderLogo from '../header-logo'
import { tw } from '@/lib/utils/tw'
import React from 'react'
import Account from '@/modules/account/templates/account'

const HeaderNavigation = () =>
{
  const { headerNavigation, accountNavigation, setOpenSideMenu } = useHeaderContext()

  const handleOpenSideMenu = () =>
    setOpenSideMenu(true)

  return (
    <nav
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Navegación principal"
    >
      <div
        className={tw(
          "border-b",
          "border-light-secondary dark:border-dark-secondary"
        )}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Left Section: Menu Icon, Logo and Navigation Links */}
          <div className="flex items-center">
            <HeaderMenuButton onClick={handleOpenSideMenu} />
            <HeaderLogo />
            <HeaderNavigationLinks navigation={headerNavigation} />
          </div>

          {/* Right Section: User */}
          <div className="flex items-center ml-auto space-x-4">
            {/* User */}
            <Account navigation={accountNavigation} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation
