'use client'

import { UserCircleIcon } from '@heroicons/react/24/outline'
import { signInWithGoogle } from '@/lib/auth/actions'
import { Generic } from '@/types/global'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const AccountSignInButton: React.FC<Generic> = ({ className }) =>
{
  return (
    <form action={signInWithGoogle}>
      <button
        type="submit"
        className={tw(
          "group -m-2 flex items-center p-2",
          className
        )}
      >
        <UserCircleIcon
          aria-hidden="true"
          className={tw(
            "size-6 flex-shrink-0",
            "text-light-secondary dark:text-dark-secondary group-hover:text-light-text/60 dark:group-hover:text-dark-text/60"
          )}
        />
      </button>
    </form>
  )
}

export default AccountSignInButton
