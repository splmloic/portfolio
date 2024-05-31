import React, { useContext }  from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import Project from './pages/project'
import Home from './pages/home'
import Navbar from './components/Navbar'
import { ThemeContext } from './components/themeContext';
import './assets/index.css';

function App() {
  const { isNightMode } = useContext(ThemeContext);
  return (
    <main className={`app ${ isNightMode ? 'night' : 'day'}`}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:projectSlug" element={<Project/>}/>
            <Route path="/projects/:projectSlug" element={<Project/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App