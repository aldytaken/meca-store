import { tw } from '@/lib/utils/tw'
import { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Maintenance | MecaStore',
}

const MaintenancePage = () =>
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
          Mantenimiento
        </p>
        <p className="mt-6 text-pretty text-lg font-medium text-light-text sm:text-xl/8">
          Lo sentimos, la página está en mantenimiento en este momento.
        </p>
      </div>
    </div>
  )
}

export default MaintenancePage
