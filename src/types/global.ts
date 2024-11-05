export interface Generic
{
  className?: string
  children?: React.ReactNode
}

export type UserLevel = 'admin' | 'user'

export type DropdownItem =
{
  label: string
  shortcut?: string
  icon?: JSX.Element
  action?: () => void
  href?: string
  id: string
}
