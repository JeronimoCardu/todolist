'use client'
import { TodoProps } from '@/types/types'
import addTask from '@/utils/addTask'
import { useState } from 'react'

export default function CreateTodo({ tasks, setTasks }: TodoProps) {
  const [value, setValue] = useState<string>('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setTasks(
          addTask(
            {
              title: value,
              completed: false,
              id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
            },
            tasks
          )
        )
      }}
      className='my-4 dark:bg-[#25273D] desktop:mx-auto desktop:max-w-4/10 bg-white rounded-[5px] items-center p-3 flex gap-4'>
      <div className='border-1 dark:border-[#393A4B] w-[1.25rem] h-[1.25rem] border-[#e3e4f1] rounded-full'></div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Create a new todo...'
        className='dark:text-[#C8CBE7] desktop:text-[1.125rem] border-0 outline-0 w-4/5'
      />
    </form>
  )
}
