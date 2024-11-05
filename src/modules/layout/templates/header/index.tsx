import HeaderNavigation from '../../components/header-navigation'
import { HeaderProvider } from '../../providers/HeaderProvider'
import HeaderSideMenu from '../../components/header-side-menu'
import { HeaderNavigationItem } from '@/types/global'

const navigation: HeaderNavigationItem[] =
[
  { label: 'Kits', href: '/kits' },
  { label: 'Historial', href: '/history' },
  { label: 'Nosotros', href: '/about' },
]

const Header = () =>
{
  return (
    <HeaderProvider navigation={navigation}>
      <HeaderNavigation />
      <HeaderSideMenu />
    </HeaderProvider>
  )
}

export default Header
