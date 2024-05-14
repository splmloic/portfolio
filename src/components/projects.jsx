import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
function Projects() {
    const[isLoading,setisLoading] =useState(true)
    const[projects, setProjects] =useState(null)
  
    useEffect(()=>{
      fetch('http://localhost:1337/api/projects?populate=*')
      .then(res => res.json())
      .then(res => {
        setProjects(res);
        setisLoading(false);
      })
    },[])

    return(
            <div className="flex flex-col justify-center items-center gap-5 py-6">
                {isLoading ? 'Loading...' : projects.data.map(project => (
                    <div key={project.id} className="max-w-xl w-full">
                        <div data-key={project.id} className="max-w-2xl rounded-2xl overflow-hidden shadow-xl">
                            <img src={`http://localhost:1337${project.attributes.backgroundimg.data.attributes.formats.large.url}`} className="w-full" alt={project.attributes.name} />
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-xl mb-2">{project.attributes.name}</h2>
                                <p className="text-gray-700 text-base">{project.attributes.description}</p>
                            </div>
                            <Link to={project.attributes.slug} className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-center">Voir le projet</Link>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Projects;