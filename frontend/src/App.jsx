import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing  from './components/Landing'
import Home from './components/Home'
import  WizardBook from './components/WizardsBook'
import  WizardDetail from './components/WizardDetail'
import SpellBook from './components/SpellsBook'
import  SpellDetail from './components/SpellDetail'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element= {<Landing />}/>
        <Route path="/home" element= {<Home />}/>
        <Route path="/mago" element= {<WizardBook />}/>
        <Route path="/mago/:id" element= {<WizardDetail />}/>
        <Route path="/hechizo" element= {<SpellBook />}/>
        <Route path="/hechizo/:id" element= {<SpellDetail />}/>
      </Routes>
    </div>
  )
}

export default App
