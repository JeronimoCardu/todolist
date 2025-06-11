import { TodoProps } from '@/types/types'
import filterList from '@/utils/filterList'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import Filter from './Filter'
import Options from './Options'
import Task from './Task'

export default function TodoList({
  tasks,
  setTasks,
  filterSelected,
  setFilterSelected,
}: TodoProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const dragTask = tasks.findIndex((task) => task.id == active.id)
    const dropTask = tasks.findIndex((task) => task.id == over?.id)
    setTasks(arrayMove(tasks, dragTask, dropTask))
  }
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        tolerance: 50,
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div>
      <section className='desktop:mx-auto overflow-hidden desktop:max-w-4/10 bg-transparent shadow-[0px_35px_50px_rgba(194,195,214,.5)] dark:shadow-[0px_35px_50px_rgba(0,0,0,.5)] rounded-[5px] '>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {filterList(tasks, filterSelected.toLowerCase()).map((task) => (
              <Task
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </SortableContext>
        </DndContext>
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
