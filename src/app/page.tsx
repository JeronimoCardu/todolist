'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import Todo from '@/components/Todo'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (mounted)
    return (
      <>
        <header className='flex items-center desktop:mx-auto desktop:max-w-4/10  justify-between'>
          <h1 className={` text-white font-bold tracking-[.75rem]  text-4xl`}>
            TODO
          </h1>
          <button
            className='cursor-pointer'
            onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
            <Image
              width={16}
              height={16}
              src={`/images/icon-${theme == 'dark' ? 'moon' : 'sun'}.svg`}
              alt='color mode'
            />
          </button>
        </header>
        <Todo />
        <div className='desktop:mx-auto desktop:max-w-4/10 p-4 group '>
          <p className='group-hover:translate-y-6 transition-transform linear duration-200 cursor-default text-[.875rem] text-[#9495a5] text-center'>
            Drag and drop to reorder list
          </p>
        </div>
      </>
    )
}
