import { DropdownItem, Generic } from './generic'
import { Session } from 'next-auth'

export interface SessionBlockButtonProps extends Generic
{
  hasSession: boolean
}

export interface SessionBlockDataProps extends Generic
{
  session: Session
}

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
