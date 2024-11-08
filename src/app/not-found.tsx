import { tw } from '@/lib/utils/tw'
import { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Not Found | MecaStore',
}

const NotFound = () =>
{
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p
          className={tw(
            "mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl",
            "text-light-accent dark:text-dark-accent"
          )}
        >
          404
        </p>
        <p className="mt-6 text-pretty text-lg font-medium text-light-text sm:text-xl/8">
          Lo sentimos, no hemos podido encontrar la página que buscas.
        </p>
      </div>
    </div>
  )
}

export default NotFound
