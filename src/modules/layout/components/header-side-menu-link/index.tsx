import { tw } from '@/lib/utils/tw'
import { HeaderNavigationItem } from '@/types/global'

const HeaderSideMenuLink: React.FC<HeaderNavigationItem> = ({ href, label }) =>
{
  return (
    <div className="flow-root">
      <a
        className={tw(
          "-m-2 block p-2 font-medium rounded",
          "text-gray-900 hover:bg-gray-100"
        )}
        href={href}
        aria-label={`Ir a ${label}`}
      >
        {label}
      </a>
    </div>
  )
}

export default HeaderSideMenuLink
