import ProjectCards from '@/components/Projects/ProjectCards'
import ProjectContent from '@/components/Projects/ProjectContent'
import React from 'react'

const ProjectsSection = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-2'>
        <ProjectContent/>
        <ProjectCards/>
    </div>
  )
}

export default ProjectsSection