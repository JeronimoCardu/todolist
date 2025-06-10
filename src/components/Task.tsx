import { TaskProps } from '@/types/types'
import deleteTask from '@/utils/deleteTask'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  task: TaskProps
  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}

export default function Task({ task, tasks, setTasks }: Props) {
  const markCompleted = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return {
            title: task.title,
            completed: !task.completed,
            id: task.id,
          }
        } else return task
      })
    )
  }
  return (
    <div
      draggable
      className='flex dark:bg-[#25273D] text-[#494C6B] items-center p-4 border-b-1 dark:text-[#C8CBE7] dark:border-[#393A4B] border-gray-100 justify-between'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => markCompleted(task.id)}
          className={`border-1 ${
            task.completed &&
            'flex justify-center items-center bg-linear-65 from-[#66C7FD] to-[#AF6EF5]'
          } dark:border-[#393A4B] w-[1.25rem] h-[1.25rem] border-[#e3e4f1] cursor-pointer rounded-full`}>
          {task.completed && (
            <Image
              width={10}
              height={10}
              src={'/images/icon-check.svg'}
              alt={'check'}
            />
          )}
        </button>
        <p
          onClick={() => markCompleted(task.id)}
          className={`${
            task.completed && 'dark:text-[#4D5067] line-through text-[#D1D2DA]'
          } cursor-pointer desktop:text-[1.125rem] text-[.875rem]`}>
          {task.title}
        </p>
      </div>
      <button
        onClick={() => {
          setTasks(deleteTask(task.id, tasks))
        }}
        className='cursor-pointer '>
        <Image
          width={12}
          height={12}
          src={'/images/icon-cross.svg'}
          alt={'delete'}
        />
      </button>
    </div>
  )
}
