'use client'

import { useHeaderContext } from '../../providers/HeaderProvider'
import HeaderNavigationLinks from '../header-navigation-links'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import HeaderMenuButton from '../header-menu-button'
import HeaderLogo from '../header-logo'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const HeaderNavigation = () =>
{
  const { navigation, setOpenSideMenu } = useHeaderContext()

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
            <HeaderNavigationLinks navigation={navigation} />
          </div>

          {/* Right Section: User */}
          <div className="flex items-center ml-auto space-x-4">
            {/* User */}
            <div className="flex lg:ml-6">
              <a
                href="#"
                className={tw(
                  "p-2",
                  "text-light-secondary hover:text-light-text/70 dark:text-dark-secondary dark:hover:text-dark-text/70"
                )}
                aria-label="Usuario"
              >
                <UserCircleIcon
                  className="size-6"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavigation
