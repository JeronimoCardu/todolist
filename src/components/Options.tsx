import Filter from './Filter'
import { SetTasksProps } from './Todo'

export default function Options({ tasks, setTasks }: SetTasksProps) {
  const tasksIncomplete = tasks.filter((task) => !task.completed)
  return (
    <>
      <div className='dark:bg-[#25273D] dark:text-[#5B5E7E] text-[#9495A5] desktop:mb-16 mb-2 flex items-center justify-between p-4'>
        <p className='text-[0.75rem]  desktop:text-[0.875rem] '>
          {tasksIncomplete.length} items left
        </p>
        <div className='hidden desktop:block'>
          <Filter />
        </div>
        <button className='text-[0.75rem] desktop:text-[0.875rem] cursor-pointer'>
          Clear Completed
        </button>
      </div>
    </>
  )
}
