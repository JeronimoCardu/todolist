import { TaskProps } from '@/types/types'

export default function addTask(task: TaskProps, tasks: TaskProps[]) {
  const tasksUpdate = [...tasks, task]
  return tasksUpdate
}
