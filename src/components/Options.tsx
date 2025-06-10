import { TaskProps, TodoProps } from '@/types/types'
import Filter from './Filter'
import clearCompleteTasks from '@/utils/clearCompleteTasks'

export default function Options({
  tasks,
  setTasks,
  filterSelected,
  setFilterSelected,
}: TodoProps) {
  const tasksIncomplete = tasks.filter((task: TaskProps) => !task.completed)
  return (
    <>
      <div className='dark:bg-[#25273D] dark:text-[#5B5E7E] text-[#9495A5]  grid grid-cols-2 desktop:grid-cols-3 items-center  p-4'>
        <p className='text-[0.75rem]  desktop:text-[0.875rem] '>
          {tasksIncomplete.length} items left
        </p>
        <div className='hidden desktop:block'>
          <Filter
            tasks={tasks}
            setTasks={setTasks}
            filterSelected={filterSelected}
            setFilterSelected={setFilterSelected}
          />
        </div>
        <button
          onClick={() => {
            setTasks(clearCompleteTasks(tasks))
          }}
          className='text-right text-[0.75rem] desktop:text-[0.875rem] cursor-pointer'>
          Clear Completed
        </button>
      </div>
    </>
  )
}
