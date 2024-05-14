import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

function Project() {
    const[isLoading,setisLoading] =useState(true)
    const[projects, setProjects] =useState(null)
    const { projectSlug } = useParams();
    const [project, setCurrentProject] = useState(undefined)
  
    useEffect(() => {
        fetch('http://localhost:1337/api/projects?populate=*')
        .then(res => res.json())
        .then(res => {
          setProjects(res);
          setisLoading(false);
        })
    }, [])

    useEffect(() => {
        if (!projects) return;
        const foundProject = projects.data.find(project => project.attributes.slug === projectSlug);
        setCurrentProject(foundProject || null);
    }, [projects, projectSlug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!project) {
        return <div>Project not found.</div>;
    }

    return(
<div className="max-w-4xl mx-auto">
    <div className="bg-cover bg-center h-64 rounded-t-lg" style={{ backgroundImage: `url('http://localhost:1337${project.attributes.backgroundimg.data.attributes.formats.medium.url}')` }}>
        <h2 className="text-4xl font-bold text-white uppercase text-center py-8">{project.attributes.name}</h2>
    </div>
    <div className="p-4">
        <p className="text-gray-800 text-lg mb-4">{project.attributes.description}</p>
        <p className="text-gray-700">{project.attributes.contenu}</p>
    </div>
    <div className="overflow-x-auto whitespace-nowrap bg-gray-200 p-4 mt-4 rounded-lg">
        {project.attributes.screenshots.data.map(project => (
            <img key={project.id} src={`http://localhost:1337${project.attributes.url}`} alt={project.attributes.name} className="inline-block h-32 mr-4 rounded-lg shadow-lg" />
        ))}
    </div>
</div>

    )
}

export default Project;