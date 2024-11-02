import { DropdownItem, Generic } from './generic'

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
