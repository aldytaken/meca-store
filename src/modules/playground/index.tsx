'use server'

import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import SessionBlock from '../session-block/templates/session-block'
import Dropdown from '../common/templates/dropdown'
import { signOutSession } from '@/lib/auth/actions'
import { DropdownItem } from '@/types/global'

const dropdownOptions: DropdownItem[] =
[
  {
    label: 'Item 1',
    shortcut: '⌘A',
    id: '1',
  },
  {
    label: 'Item 2',
    shortcut: '⌘B',
    id: '2',
  },
  {
    label: 'Item 3',
    id: 'pndjo'
  },
  {
    label: 'Salir',
    action: signOutSession,
    icon: <ArrowLeftStartOnRectangleIcon/>,
    id: 'sign-out',
  },
]

const Playground = () =>
{
  return (
    <>
      <SessionBlock />
      <Dropdown label="Dropdown" options={dropdownOptions} />
    </>
  )
}

export default Playground
