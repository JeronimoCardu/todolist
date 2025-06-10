import { SetTasksProps } from './Todo'
import Task from './Task'
import Options from './Options'
import Filter from './Filter'

export default function TodoList({ tasks, setTasks }: SetTasksProps) {
  return (
    <>
      <section className='desktop:mx-auto desktop:max-w-4/10 bg-white shadow-[0px_35px_50px_rgba(194,195,214,.5)] dark:shadow-[0px_35px_50px_rgba(0,0,0,.5)] rounded-[5px] '>
        {tasks.map((task, idx) => (
          <Task key={idx} task={task} />
        ))}
        <Options tasks={tasks} setTasks={setTasks} />
      </section>
      <div className='desktop:hidden'>
        <Filter />
      </div>
    </>
  )
}
