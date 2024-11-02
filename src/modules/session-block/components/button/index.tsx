'use client'

import { signInWithGoogle, signOutSession } from '@/lib/auth/actions'
import { SessionBlockButtonProps } from '@/types/components'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const SessionBlockButton: React.FC<SessionBlockButtonProps> = ({ hasSession, className }) =>
{
  const action = hasSession
    ? signOutSession
    : signInWithGoogle

  return (
    <form action={action}>
      <button
        type="submit"
        className={tw(
          "px-4 py-2 rounded-md",
          "bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background",
          className
        )}
      >
        {hasSession ? 'Sign Out' : 'Sign In'}
      </button>
    </form>
  )
}

export default SessionBlockButton
