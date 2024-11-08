'use server'

import { signInWithGoogle, signOutSession } from '@/lib/auth/actions'
import { SessionProvider } from '@/lib/auth/provider'
import SessionBlockButton from '../components/button'
import SessionBlockData from '../components/data'
import { Generic } from '@/types/global'
import { tw } from '@/lib/utils/tw'
import { auth } from '@/auth'
import React from 'react'

const SessionBlock: React.FC<Generic> = async ({ className }) =>
{
  const session = await auth()
  const isAuthenticated = !!session

  return (
    <div
      className={tw(
        "p-6 space-y-6",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-semibold">Session</h2>
        <SessionBlockButton
          action={isAuthenticated
            ? signOutSession
            : signInWithGoogle
          }
          isAuthenticated={isAuthenticated}
        />
      </div>

      {isAuthenticated && (
        <SessionProvider session={session}>
          <SessionBlockData />
        </SessionProvider>
      )}
    </div>
  )
}

export default SessionBlock
