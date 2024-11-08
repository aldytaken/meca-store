import { Banner } from '@/modules/layout/templates/banner'
import Header from '@/modules/layout/templates/header'
import Playground from '@/modules/playground'
import { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Home | MecaStore'
}

const Home = async () =>
{
  return (
    <>
      <Header />
      <Banner text="Sólo para estudihambres de la UT Nay." className="font-semibold" />
      <Playground />
    </>
  )
}

export default Home
