import { TaskProps } from '@/types/types'
import deleteTask from '@/utils/deleteTask'
import markCompleted from '@/utils/markComplete'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  task: TaskProps
  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}

export default function Task({ task, tasks, setTasks }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    })

  const styleTask = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  }

  return (
    <div
      style={styleTask}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      className='grid grid-cols-[1fr_25px] hover:brightness-95 linear transition-normal duration-200 cursor-pointer dark:bg-[#25273D] bg-white text-[#494C6B] items-center p-4 border-b-1 dark:text-[#C8CBE7] dark:border-[#393A4B] border-gray-100 justify-between'>
      <div className='grid grid-cols-[25px_calc(90%)] items-center gap-4'>
        <button
          onClick={() => {
            setTasks(markCompleted(task.id, tasks))
          }}
          className={`border-1 ${
            task.completed &&
            'flex justify-center items-center bg-linear-65 from-[#66C7FD] to-[#AF6EF5]'
          } dark:border-[#393A4B] w-[1.25rem] h-[1.25rem] border-[#e3e4f1] cursor-pointer rounded-full`}>
          {task.completed && (
            <Image
              width={10}
              height={10}
              style={{ height: 'auto', width: 'auto' }}
              src={'/images/icon-check.svg'}
              alt={'check'}
            />
          )}
        </button>
        <p
          onClick={() => {
            setTasks(markCompleted(task.id, tasks))
          }}
          className={`${
            task.completed && 'dark:text-[#4D5067] line-through text-[#D1D2DA]'
          } cursor-pointer desktop:text-[1.125rem] text-[.875rem]`}>
          {task.title}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          setTasks(deleteTask(task.id, tasks))
        }}
        className='cursor-pointer '>
        <Image
          width={12}
          height={12}
          style={{ height: 'auto', width: 'auto' }}
          src={'/images/icon-cross.svg'}
          alt={'delete'}
        />
      </button>
    </div>
  )
}
