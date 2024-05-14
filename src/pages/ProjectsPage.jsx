import React from 'react'
import Projects from '../components/projects'

function ProjectsPage(){
return (

    <div>
        <div className="mx-auto max-w-6xl py-2 text-center sm:py-8 lg:py-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Projets FullStack fait avec 💜</h1>
        </div>
        <Projects/>
    </div>
)
}
export default ProjectsPage