'use server'

import { ArrowLeftEndOnRectangleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { DropdownItem, HeaderNavigationItem } from '@/types/global'
import HeaderNavigation from '../../components/header-navigation'
import { HeaderProvider } from '../../providers/HeaderProvider'
import HeaderSideMenu from '../../components/header-side-menu'
import { SessionProvider } from '@/lib/auth/provider'
import { signOutSession } from '@/lib/auth/actions'
import { auth } from '@/auth'

const Header = async () =>
{
  const session = await auth()

  const headerNavigation: HeaderNavigationItem[] =
  [
    { label: 'Kits', href: '/kits' },
    { label: 'Historial', href: '/history' },
    { label: 'Nosotros', href: '/about' },
  ]

  const accountNavigation: DropdownItem[] =
  [
    {
      label: 'Salir',
      icon: <ArrowLeftEndOnRectangleIcon />,
      action: signOutSession,
      id: 'sign-out',
    }
  ]

  const accountNavigationAdminOnly: DropdownItem =
  {
    label: 'Dashboard',
    href: '/dashboard',
    id: 'dashboard',
    icon: <ExclamationTriangleIcon />, 
  }

  if (session?.user?.role === 'admin')
    accountNavigation.splice(accountNavigation.length - 1, 0, accountNavigationAdminOnly)

  return (
    <SessionProvider session={session}>
      <HeaderProvider headerNavigation={headerNavigation} accountNavigation={accountNavigation}>
        <HeaderNavigation />
        <HeaderSideMenu />
      </HeaderProvider>
    </SessionProvider>
  )
}

export default Header
