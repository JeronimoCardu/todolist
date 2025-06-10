import { TaskProps } from '@/types/types'

export default function clearCompleteTasks(tasks: TaskProps[]) {
  return tasks.filter((task) => !task.completed)
}
