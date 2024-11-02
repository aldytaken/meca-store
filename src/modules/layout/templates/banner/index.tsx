
'use client'

import { BannerProps } from '@/types/templates'
import { tw } from '@/lib/utils/tw'
import React from 'react'

export const Banner: React.FC<BannerProps> = ({ text, children, className }) =>
{
  return (
    <div
      className={tw(
        "px-4 m:px-6 lg:px-8",
        "bg-light-accent dark:bg-dark-banner-accent",
        { className: !!children }
      )}
    >
      {children ? (
        children
      ) : (
        <div
          className={tw(
            "flex h-10 items-center justify-center text-sm font-medium",
            className
          )}>
          <span className="text-light-background dark:text-dark-background">
            {text}
          </span>
        </div>
      )}
    </div>
  )
}
