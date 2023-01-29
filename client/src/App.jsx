import { Routes, Route } from 'react-router-dom'
import Me from './pages/Me'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import { NavBar } from './components/NavBar'
import './css/app.css'
import Hobby from './pages/Hobby'
import MapBox from './pages/MapBox'


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
        </Routes>
      </div>
    </>
  )
}

export default App
