import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './components/projects'
import ProjectsPage from './pages/ProjectsPage';
import Project from './pages/project'
import Home from './pages/home'
import Navbar from './components/Navbar';
import './assets/index.css';

function App() {

  return (
    <main>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/:projectSlug" element={<Project/>}/>
          <Route path="/projects/:projectSlug" element={<Project/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
