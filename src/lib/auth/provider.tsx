'use client'

import { SessionProviderProps } from '@/types/providers'
import React, { createContext, useContext } from 'react'
import { Session } from 'next-auth'

interface SessionContextProps
{
  session: Session
  isAuthenticated: boolean
  user: Session['user']
}

const SessionContext = createContext<SessionContextProps | null>(null)

export const useSessionContext = () =>
{
  const context = useContext(SessionContext)

  if (!context)
    throw new Error('useSessionContext must be used within a SessionProvider')

  return context
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ session, children }) =>
{
  const isAuthenticated = !!session
  const user = session.user

  return (
    <SessionContext.Provider value={{ session, isAuthenticated, user }}>
      {children}
    </SessionContext.Provider>
  )
}
