import { TaskProps } from '@/types/types'

export default function markCompleted(id: number, tasks: TaskProps[]) {
  return tasks.map((task) => {
    if (task.id == id) {
      return {
        title: task.title,
        completed: !task.completed,
        id: task.id,
      }
    } else return task
  })
}
