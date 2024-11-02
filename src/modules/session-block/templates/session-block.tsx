'use server'

import SessionBlockButton from '../components/button'
import SessionBlockData from '../components/data'
import { Generic } from '@/types/generic'
import { tw } from '@/lib/utils/tw'
import { auth } from '@/auth'
import React from 'react'

const SessionBlock: React.FC<Generic> = async ({ className }) =>
{
  const session = await auth()
  const hasSession = !!session

  return (
    <div
      className={tw(
        "p-6 space-y-6",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-semibold">Session</h2>
        <SessionBlockButton hasSession={hasSession} />
      </div>
      {hasSession && <SessionBlockData session={session} />}
    </div>
  )
}

export default SessionBlock
