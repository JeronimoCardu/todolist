'use client'
import { useState } from 'react'

export default function Filter() {
  const [selected, setSelected] = useState<string>('All')
  const buttons = ['All', 'Active', 'Completed']
  console.log(selected)
  return (
    <div className='dark:bg-[#25273D] text-[0.875rem] bg-white rounded-[5px] desktop:m-0 mb-4 gap-4 font-bold p-[.5rem_1rem]  flex items-center justify-center'>
      {buttons.map((btn, idx) => (
        <button
          onClick={() => setSelected(btn)}
          key={idx}
          className={`${
            selected == btn
              ? 'text-[#3a7cfd]'
              : ' dark:text-[#5B5E7E] text-[#9495A5]'
          } cursor-pointer `}>
          {btn}
        </button>
      ))}
    </div>
  )
}
