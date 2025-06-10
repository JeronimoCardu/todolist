import { TaskProps } from '@/types/types'

export default function filterList(tasks: TaskProps[], filter: string) {
  switch (filter) {
    case 'active':
      return tasks.filter((task) => !task.completed)
    case 'completed':
      return tasks.filter((task) => task.completed)
    default:
      return tasks
  }
}
