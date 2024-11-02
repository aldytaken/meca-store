import SessionBlock from '@/modules/session-block/templates/session-block'
import { Banner } from '@/modules/layout/templates/banner'
import { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Home | MecaStore'
}

const Home = async () =>
{
  return (
    <>
      <Banner text="Sólo para estudihambres de la UT Nay." className="font-semibold" />
      <SessionBlock />
    </>
  )
}

export default Home
