import React from 'react'

import ProjectItem from '../ProjectItem'

import { Project } from '../../types/Project'

interface ProjectListProps {
  items: Project[]
}

const ProjectList: React.FC<ProjectListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default ProjectList
