'use server'

import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import SessionBlock from '../session-block/templates/session-block'
import Dropdown from '../common/templates/dropdown'
import { signOutSession } from '@/lib/auth/actions'
import { DropdownItem } from '@/types/global'
import Button from '../common/templates/button'

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
    <section className="space-y-1 p-6">
      <SessionBlock />

      <Dropdown label="Dropdown" options={dropdownOptions} />

      <div className="flex gap-4 flex-wrap justify-start">
        <Button style="primary" label="Button 1" action={signOutSession} />
        <Button style="secondary" label="Button 2" href='/h' />
        <Button style="danger" label="Button 3" href='/h' />
        <Button style="success" label="Button 4" href='/h' />
      </div>
    </section>
  )
}

export default Playground
