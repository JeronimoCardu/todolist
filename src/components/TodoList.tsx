import Task from './Task'
import Options from './Options'
import Filter from './Filter'
import { TodoProps } from '@/types/types'
import filterList from '@/utils/filterList'

export default function TodoList({
  tasks,
  setTasks,
  filterSelected,
  setFilterSelected,
}: TodoProps) {
  return (
    <div className='space-y-4'>
      <section
        onDragOver={(e) => e.preventDefault()}
        className='desktop:mx-auto overflow-hidden desktop:max-w-4/10 bg-transparent shadow-[0px_35px_50px_rgba(194,195,214,.5)] dark:shadow-[0px_35px_50px_rgba(0,0,0,.5)] rounded-[5px] '>
        {filterList(tasks, filterSelected.toLowerCase()).map((task, idx) => (
          <Task key={idx} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
        <Options
          tasks={tasks}
          setTasks={setTasks}
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
        />
      </section>
      <div className='desktop:hidden'>
        <Filter
          tasks={tasks}
          setTasks={setTasks}
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
        />
      </div>
    </div>
  )
}
