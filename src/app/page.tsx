import { signInWithGoogle, signOutSession } from '@/lib/auth/actions'
import { Metadata } from 'next'
import { auth } from '@/auth'

export const metadata: Metadata =
{
  title: 'Home | MecaStore'
}

const Home = async () =>
{
  const session = await auth()
  const hasSession = session?.user

  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold">MecaStore</h1>

      <div className="my-2">
        <h2 className="text-lg font-semibold">Session Control</h2>

        <form action={hasSession ? signOutSession : signInWithGoogle}>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1.5 rounded-md"
          >
            {hasSession ? 'Sign Out' : 'Sign In with Google'}
          </button>
        </form>
      </div>
      <div className="my-2">
        <h2 className="text-lg font-semibold">Session Data</h2>
        <pre className="bg-gray-200/70 rounded-md px-1 py-1.5">{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Home
