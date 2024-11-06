import { DropdownItem, Generic, HeaderNavigationItem } from './global'
import { Session } from 'next-auth'

export interface SessionProviderProps extends Generic
{
  session: Session | null
}

export interface HeaderProviderProps extends Generic
{
  headerNavigation: HeaderNavigationItem[]
  accountNavigation: DropdownItem[]
}

export interface HeaderContextProps
{
  headerNavigation: HeaderNavigationItem[]
  openSideMenu: boolean
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>
  accountNavigation: DropdownItem[]
}
