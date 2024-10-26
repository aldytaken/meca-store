import NextAuth, { NextAuthConfig } from 'next-auth'
import { Provider } from 'next-auth/providers'
import Google from 'next-auth/providers/google'

const providers: Provider[] =
[
  Google
]

const callbacks: NextAuthConfig['callbacks'] =
{

}

export const authConfig: NextAuthConfig =
{
  providers: providers,
  callbacks: callbacks
}
