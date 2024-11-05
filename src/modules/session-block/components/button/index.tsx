'use client'

import { SessionBlockButtonProps } from '@/types/components'
import { signOutSession } from '@/lib/auth/actions'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const SessionBlockButton: React.FC<SessionBlockButtonProps> = ({ action, className }) =>
{
  const isAuthenticated = action === signOutSession

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
        {isAuthenticated ? 'Sign Out' : 'Sign In'}
      </button>
    </form>
  )
}

export default SessionBlockButton
