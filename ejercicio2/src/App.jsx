import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './components/Profile'

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <ProfileCard 
        nombre="Jennifer Alfaro"
        edad={17}
        profesion="Desarrollo de Software"
        ciudad="San Salvador"
      />
    </div>
  );
}

export default App;