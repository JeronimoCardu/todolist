'use client'
import { useState } from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import { TaskProps } from '@/types/types'

export default function Todo() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title: 'Complete online JavaScript course',
      completed: true,
      id: 0,
    },
    {
      title: 'Jog around the park 3x',
      completed: false,
      id: 1,
    },
    {
      title: '10 minutes meditation',
      completed: false,
      id: 2,
    },
    {
      title: 'Read for 1 hour',
      completed: false,
      id: 3,
    },
    {
      title: 'Pick up groceries',
      completed: false,
      id: 4,
    },
    {
      title: 'Complete Todo App on Fronten Mentor',
      completed: false,
      id: 5,
    },
  ])
  const [filterSelected, setFilterSelected] = useState<string>('All')
  return (
    <>
      <CreateTodo
        tasks={tasks}
        setTasks={setTasks}
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />
      <TodoList
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  )
}
