import { NextResponse } from 'next/server'
import { authConfig } from '../auth.config'
import NextAuth from 'next-auth'

const { auth } = NextAuth(authConfig)

const PROTECTED_WITH_ROLE = ['/dashboard']
const PROTECTED_WITH_LOGIN = ['/checkout', ...PROTECTED_WITH_ROLE]

export default auth((req) =>
{
  const role = req.auth?.user.role
  const hasLogin = !!req.auth
  const { pathname } = req.nextUrl

  if (PROTECTED_WITH_LOGIN.includes(pathname))
  {
    if (!hasLogin)
    {
      const url = new URL('/api/auth/signin', req.url)
      url.searchParams.set('callbackUrl', req.url)

      return NextResponse.redirect(url)
    }
  }

  if (PROTECTED_WITH_ROLE.includes(pathname))
  {
    if (!hasLogin || role !== 'admin')
    {
      const url = new URL('/403', req.url)

      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
})
