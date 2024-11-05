'use client'

import { useSessionContext } from '@/lib/auth/provider'
import { Generic } from '@/types/global'
import { tw } from '@/lib/utils/tw'
import React from 'react'

const SessionBlockData: React.FC<Generic> = ({ className }) =>
{
  const { session } = useSessionContext()

  return (
    <pre
      className={tw(
        "rounded-md px-3 py-2 overflow-x-auto whitespace-pre-wrap text-sm",
        "bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text",
        className
      )}
    >
      <code>
        {JSON.stringify(session, null, 2)}
      </code>
    </pre>
  )   
}

export default SessionBlockData
