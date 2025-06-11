'use client'

import { TodoProps } from '@/types/types'

export default function Filter({
  filterSelected,
  setFilterSelected,
}: TodoProps) {
  const filters = ['All', 'Active', 'Completed']
  return (
    <div className='dark:bg-[#25273D] text-[0.875rem] bg-white rounded-[5px] desktop:m-0 mb-4 gap-4 font-bold p-[.75rem_1rem]  flex items-center justify-center'>
      {filters.map((btn, idx) => (
        <button
          onClick={() => {
            setFilterSelected(btn)
          }}
          key={idx}
          className={`${
            filterSelected == btn
              ? 'text-[#3a7cfd]'
              : ' dark:text-[#5B5E7E] text-[#9495A5]'
          } cursor-pointer `}>
          {btn}
        </button>
      ))}
    </div>
  )
}
