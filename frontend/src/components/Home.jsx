import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <main className='HomePage'>
      <h1>Elige un libro</h1>
    <div className='Home'>
        <Link to='/mago'>
        <div className="HomeWizardCard">Magos por Tomás Jorcin
        <div>
        <img src="../../public/Magos.jpg" className="ImageBook" alt="Magos"/>
        </div>
        <div>
        Descubra algunos de los magos y brujas que han conformado
        el mundo magico de Harry Potter.
        </div>
        <img src="./src/assets/BookIcon.png" className="BookIcon" alt="BookIcon"/>
        </div>
        </Link>
        <Link to='/hechizo'>
        <div className="HomeSpellCard">Hechizos por Tomás Jorcin
        <div>
        <img src="../../public/Hechizos.jpg" className="ImageBook" alt="Hechizos" />
        </div>
        <div>
        Guía de los hechizos de Harry Potter, para magos y brujas.
        No apto para Muggles.
        </div>
        <img src="./src/assets/BookIcon.png" className="BookIcon" alt="BookIcon"/>
        </div>
        </Link>
        <video muted autoPlay loop>
        <source src="../../public/Fondo2.mp4" type="video/mp4"/>
    </video>
    </div>
    </main>
  )
}

export default Home