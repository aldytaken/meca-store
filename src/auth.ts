import NextAuth, { NextAuthConfig } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { authConfig } from './auth.config'
import { prisma } from '@/prisma'

const _authConfig: NextAuthConfig =
{
  adapter: PrismaAdapter(prisma),
  session:
  {
    strategy: 'jwt'
  },
  ...authConfig
}

export const { handlers, signIn, signOut, auth } = NextAuth(_authConfig)
