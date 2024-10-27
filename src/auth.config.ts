import { NextAuthConfig, User } from 'next-auth'
import Google from 'next-auth/providers/google'
import { Provider } from 'next-auth/providers'
import { UserLevel } from './types/user'
import { ADMINS } from './config'
import { prisma } from './prisma'

const getUserRoleByEmail = (email = ''): UserLevel =>
  ADMINS.test(email) ? 'admin' : 'user'

const getProfile = (profile: any) =>
{
  const object: User =
  {
    id: profile.sub,
    email: profile.email,
    name: profile.name,
    image: profile.picture,
    role: getUserRoleByEmail(profile.email)
  }

  return (object)
}

const providers: Provider[] =
[
  Google({ profile: getProfile })
]

const callbacks: NextAuthConfig['callbacks'] =
{
  async signIn({ user })
  {
    if (user && user.email)
    {
      const dbUser = await prisma.user
        .findUnique({ where: { email: user.email } })

      if (dbUser)
      {
        await prisma.user
          .update({ where: { email: user.email }, data: { role: getUserRoleByEmail(user.email) } })
      }
    }

    return true
  },
  async session({ session, token })
  {
    session.user.role = token.role as UserLevel

    return session
  },
  async jwt({ token, user })
  {
    if(user)
      token.role = user.role

    return token
  },
}

export const authConfig: NextAuthConfig =
{
  providers: providers,
  callbacks: callbacks
}
