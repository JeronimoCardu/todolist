import { Dispatch, SetStateAction } from 'react'

export type TaskProps = {
  title: string
  completed: boolean
  id: number
}
export type TodoProps = {
  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
  filterSelected: string
  setFilterSelected: Dispatch<SetStateAction<string>>
}
