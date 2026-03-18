import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './components/cards'
import Boton from './components/Boton'
import Input from './components/Inputs'
import Select from './components/Select'
import Checkbox from './components/Checks'
import Switch from './components/Switch'
import Alerts from './components/Alerts'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <div className="container mt-5">

        <Cards
          titulo="Jennifer Alfaro"
          texto="Holaa, estoy usando react, A continuación podrás visualizar 20 componentes como introducción a react y bootstrap"
          imagen={viteLogo}
        />

        <div className='mt-3'>
          <Boton
            texto={"Clic si o no"}
            clic={() => alert("Diste clic, yeaaah")} />
        </div>
        <div className='mt-3'>
          <Input />
        </div>
        <div className='container mt-5'>
          <Select />
        </div>
        <div className="mt-3">
          <Checkbox label="Si, hacer la tarea" />
          <Checkbox label="No, hacer la tarea" checked />
        </div>
        <div className="mt-3">
          <Switch label="Activar modo oscuro" />
        </div>
        <div className="mt-3">
          <Alerts
            tipo="success"
            titulo="¡Bien hecho!"
            mensaje="Ganaste un auto"
          />
        </div>
        <div className="mt-4">
  <Formulario />
</div>
      </div>
    </>
  )
}

export default App
