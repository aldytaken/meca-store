'use client'

import { AccountProfilePictureProps } from '@/types/components'
import { tw } from '@/lib/utils/tw'
import Image from 'next/image'
import React from 'react'

const AccountProfilePicture: React.FC<AccountProfilePictureProps> = ({ src, username, className }) =>
{
  const alt = username
    ? `Foto de perfil de ${username}`
    : 'Foto de perfil'

  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={tw(
        "rounded-full h-6 w-6 flex-shrink-0",
        className
      )}
    />
  )
}

export default AccountProfilePicture
