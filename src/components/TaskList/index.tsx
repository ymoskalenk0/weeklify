import React from 'react'

import TaskItem from '../TaskItem'

import { Task } from '../../types/Task'

interface TaskListProps {
  items: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <TaskItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default TaskList
