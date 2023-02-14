import { Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import { NavBar } from './components/NavBar'
import Life from './components/Life'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Me from './pages/Me'
import Hobby from './pages/Hobby'
import MapBox from './pages/MapBox'
import './css/app.css'


function App() {
  return (
    <>
      <NavBar />
      <div 
      >
        <Routes>
          <Route path='/' element={<Me />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/hobby' element={<Hobby />} />
          <Route path='/mapbox' element={<MapBox/>} />
          <Route path='/life' element={<Life/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
