'use client'

import AccountProfilePicture from '../components/profile-picture'
import AccountSignInButton from '../components/signin-button'
import Dropdown from '@/modules/common/templates/dropdown'
import { useSessionContext } from '@/lib/auth/provider'
import { AccountProps } from '@/types/templates'
import React from 'react'

const Account: React.FC<AccountProps> = ({ navigation, className }) =>
{
  const { isAuthenticated, user } = useSessionContext()

  if (!isAuthenticated)
    return <AccountSignInButton />

  return (
    <Dropdown options={navigation} className={className}>
      {user?.name}
      {user?.image && <AccountProfilePicture src={user.image} username={user.name} />}
      {!user?.image && <AccountSignInButton />}
    </Dropdown>
  )
}

export default Account
