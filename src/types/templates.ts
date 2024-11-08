import { DropdownItem, Generic } from './global'

export interface BannerProps extends Generic
{
  text: string
}

export interface DropdownProps extends Generic
{
  options: DropdownItem[]
  label?: string
  onSelect?: (id: string) => void
}

export interface AccountProps extends Generic
{
  navigation: DropdownItem[]
}

export interface ButtonProps extends Generic
{
  style?: 'primary' | 'secondary' | 'danger' | 'success'
  action?: () => void
  label?: string
  href?: string
}
