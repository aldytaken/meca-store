import { signInWithGoogle, signOutSession } from '@/lib/auth/actions'
import { DropdownItem, Generic, HeaderNavigationItem } from './global'

export interface DropdownIconProps extends Generic
{
  icon: JSX.Element
}

export interface DropdownItemProps extends Generic, DropdownItem
{
  onSelect?: (id: string) => void
}

export interface DropdownButtonContentProps
{
  label: string
  shortcut?: string
  icon?: JSX.Element
}

export interface DropdownShortcutProps extends Generic
{
  shortcut: string
}

export interface SessionBlockButtonProps extends Generic
{
  action: typeof signInWithGoogle | typeof signOutSession
  isAuthenticated?: boolean
}

export interface HeaderSideMenuCloseButtonProps extends Generic
{
  onClose: () => void
}

export interface HeaderSideMenuLinksProps extends Generic
{
  navigation: HeaderNavigationItem[]
}

export interface HeaderNavigationLinksProps extends Generic
{
  navigation: HeaderNavigationItem[]
}

export interface AccountProfilePictureProps extends Generic
{
  username?: string | null
  src: string
}
