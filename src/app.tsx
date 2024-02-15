import { Routes, Route } from 'react-router-dom';

import { Main, Resume } from './pages';
import { Nav } from './modules'
import './app.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  )
}

export default App
