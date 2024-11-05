'use client'

import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = () =>
{
  return (
    <Link
      className="ml-4 flex lg:ml-0"
      href="/" aria-label="Meca Store - Catálogo de productos"
    >
      <Image
        src="/cry.gif"
        alt="Meca Store Logotipo"
        width={32}
        height={32}
        unoptimized
        className="h-8 w-auto"
      />
    </Link>
  )
}

export default HeaderLogo
