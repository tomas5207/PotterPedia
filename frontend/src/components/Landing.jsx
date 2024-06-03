import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className='LandingPage'>
    <div className="Landing">
        <Link to='/home'>
            Pulsa aquí para entrar
        </Link>
    
    <video muted autoPlay loop>
        <source src="../../public/Fondo1.mp4" type="video/mp4"/>
    </video>
    </div>
    </main>
  )
}

export default Landing