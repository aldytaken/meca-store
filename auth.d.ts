import NextAuth, { DefaultSession } from 'next-auth'
import { UserLevel } from '@/types/user'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth'
{
  interface Session
  {
    user: { role: UserLevel } & DefaultSession['user']
  }

  interface User
  {
    role: UserLevel
  }
}

declare module 'next-auth/jwt'
{
  interface JWT
  {
    role: string
  }
}
