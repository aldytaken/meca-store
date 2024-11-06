'use client'

import { HeaderContextProps, HeaderProviderProps } from '@/types/providers'
import { createContext, useContext, useState } from 'react'

const HeaderContext = createContext<HeaderContextProps | null>(null)

export const useHeaderContext = () =>
{
  const context = useContext(HeaderContext)

  if (!context)
    throw new Error('useHeaderContext must be used within a HeaderProvider')

  return context
}

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children, accountNavigation, headerNavigation }) =>
{
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <HeaderContext.Provider value={{ accountNavigation, headerNavigation, openSideMenu, setOpenSideMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}
