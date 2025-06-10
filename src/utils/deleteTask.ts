import { TaskProps } from '@/types/types'

export default function deleteTask(id: number, tasks: TaskProps[]) {
  return tasks.filter((task) => task.id != id)
}
