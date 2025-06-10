import Image from 'next/image'
import { TaskProps } from './Todo'

type Props = {
  task: TaskProps
}

export default function Task({ task }: Props) {
  return (
    <div className='flex dark:bg-[#25273D] text-[#494C6B] items-center p-4 border-b-1 dark:text-[#C8CBE7] dark:border-[#393A4B] border-gray-100 justify-between'>
      <div className='flex items-center gap-4'>
        <button className='border-1 dark:border-[#393A4B] w-[1.25rem] h-[1.25rem] border-[#e3e4f1] cursor-pointer rounded-full'>
          <Image
            width={20}
            height={20}
            src={'/images/icon-check.svg'}
            alt={'check'}
          />
        </button>
        <p className='cursor-pointer desktop:text-[1.125rem] text-[.875rem]'>
          {task.title}
        </p>
      </div>
      <button className='cursor-pointer '>
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
