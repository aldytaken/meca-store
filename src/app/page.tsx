import { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Home | MecaStore'
}

const Home = () =>
{
  return (
    <h1 className="text-4xl font-semibold">MecaStore</h1>
  )
}

export default Home
