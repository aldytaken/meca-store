import { getToken, GetTokenParams } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_WITH_ROLE = ['/dashboard']
const PROTECTED_WITH_LOGIN = ['/checkout']

const PROTECTED_PATHS = [...PROTECTED_WITH_ROLE, ...PROTECTED_WITH_LOGIN]

const redirectTo = (url: string, req: NextRequest, options?: { callback?: string }) =>
{
  const redirect = new URL(url, req.url)
  
  if (options?.callback)
    redirect.searchParams.set('callbackUrl', req.url)

  return NextResponse.redirect(redirect)
}

export const middleware = async (req: NextRequest) =>
{
  const params: GetTokenParams =
  {
    req,
    secureCookie: process.env.NODE_ENV === 'production',
    secret: process.env.AUTH_SECRET,
  } 

  const session = await getToken(params)

  const { pathname } = req.nextUrl
  const hasLogin = !!session

  if (PROTECTED_PATHS.includes(pathname))
  {
    if (!hasLogin)
      return redirectTo('/api/auth/signin', req, { callback: req.url })
  }

  if (PROTECTED_WITH_ROLE.includes(pathname))
  {
    if (!hasLogin || session.role !== 'admin')
      return redirectTo('/403', req)
  }

  return NextResponse.next()
}

export const config =
{
  matcher: ['/dashboard', '/checkout'],
}
