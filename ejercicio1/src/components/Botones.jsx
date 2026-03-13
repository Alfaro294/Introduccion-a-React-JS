import React from 'react'
import './Boton.css'

const Boton = ({texto, clicHere}) =>{
    return (
        <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button onClick={clicHere} class="btn btn-primary" type="button">{texto}</button>
</div>
    )
}

export default Boton