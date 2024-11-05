import { Generic, HeaderNavigationItem } from './global'
import { Session } from 'next-auth'

export interface SessionProviderProps extends Generic
{
  session: Session | null
}

export interface HeaderProviderProps extends Generic
{
  navigation: HeaderNavigationItem[]
}

export interface HeaderContextProps
{
  navigation: HeaderNavigationItem[]
  openSideMenu: boolean
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>
}
