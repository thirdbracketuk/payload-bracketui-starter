'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('dark')
  // })

  return (
    <div
      className="relative -mt-[10.4rem]    flex items-center justify-center"
      // data-theme="dark"
    >
      <div className="container pt-16 md:pt-24 mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem]  md:text-center">
          {richText && <RichText className="mb-6 " data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none ">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
<div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-t from-white dark:from-black via-transparent dark:via-transparent to-white dark:to-black" />
      </div>
    </div>
  )
}
