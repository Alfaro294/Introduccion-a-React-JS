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
import Badge from './components/Badges'
import ProgressBar from './components/ProgressBar'
import Lista from './components/listgroup'
import Modal from './components/Modal'

function App() {
      const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className="container mt-5">

        <Cards
          titulo="Jennifer Alfaro"
          texto="Holaa, estoy usando react, A continuación podrás visualizar 20 componentes como introducción a react y bootstrap"
          imagen={viteLogo}
        />
        <Lista />
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
<h3>
        Estado:
        <Badge texto="Activo" color="success" />
        <Badge texto="Nuevo" color="primary" />
      </h3>
      <h4>Progreso del curso</h4>

      <ProgressBar porcentaje={30} color="danger" />
      <br />
      <ProgressBar porcentaje={60} color="warning" />
      <br />
      <ProgressBar porcentaje={90} color="success" />

    <div className="container mt-5">

      <button 
        className="btn btn-primary"
        onClick={() => setMostrarModal(true)}
      >
        Abrir Modal
      </button>

      <Modal 
        mostrar={mostrarModal}
        cerrar={() => setMostrarModal(false)}
      />

    </div>
      </div>
    </>
  )
}

export default App
