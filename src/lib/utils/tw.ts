import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tw = (...classes: ClassValue[]): string =>
  twMerge(clsx(classes))
