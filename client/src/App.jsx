import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Blurred background layer */}
      <div className="absolute inset-0 bg-[url('./src/assets/bgImage.svg')] bg-cover w-full h-full blur-md z-0"></div>
      {/* Main app content */}
      <div className="relative z-10 w-full h-full">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App