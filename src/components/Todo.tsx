'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'

export type TaskProps = {
  title: string
  completed: boolean
}
export type SetTasksProps = {
  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}

export default function Todo() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title: 'Complete online JavaScript course',
      completed: true,
    },
    {
      title: 'Jog around the park 3x',
      completed: false,
    },
    {
      title: '10 minutes meditation',
      completed: false,
    },
    {
      title: 'Read for 1 hour',
      completed: false,
    },
    {
      title: 'Pick up groceries',
      completed: false,
    },
    {
      title: 'Complete Todo App on Fronten Mentor',
      completed: false,
    },
  ])
  return (
    <>
      <CreateTodo tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </>
  )
}
