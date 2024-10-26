'use server'
import { signOut, signIn } from '@/auth'

export const signInWithGoogle = async () =>
  await signIn('google')

export const signOutSession = async () =>
  await signOut()
