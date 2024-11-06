'use client'

import HeaderSideMenuCloseButton from '../header-side-menu-close-button'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useHeaderContext } from '../../providers/HeaderProvider'
import HeaderSideMenuLinks from '../header-side-menu-links'

const HeaderSideMenu = () =>
{
  const { headerNavigation, openSideMenu, setOpenSideMenu } = useHeaderContext()

  const handleCloseSideMenu = () =>
    setOpenSideMenu(false)

  return (
    <Dialog
      open={openSideMenu}
      onClose={handleCloseSideMenu}
      className="relative lg:hidden"
    >
      <DialogBackdrop
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear"
        transition
      />
      <div className="fixed inset-0 flex">
        <DialogPanel
          className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out"
          transition
        >
          <HeaderSideMenuCloseButton onClose={handleCloseSideMenu} />
          <HeaderSideMenuLinks navigation={headerNavigation} />
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default HeaderSideMenu
