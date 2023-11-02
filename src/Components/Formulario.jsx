import React, { useState } from 'react'
import Card from './Card'
import formStyles from '../Styles/Formulario.module.css'

const Formulario = () => {
    const [estudiante, setEstudiante] = useState({
        nombre: '',
        materia: '',
        edad: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const controlarSumbit = (evento) => {
        evento.preventDefault()
        if (estudiante.nombre.length >= 3 &&
            estudiante.nombre.includes(' ') &&
            estudiante.materia.length > 6 &&
            estudiante.edad > 0) 
        {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div >
            <h1>Ingresar Estudiante</h1>
            <form onSubmit={controlarSumbit} className={formStyles.contenedor}>
                <label>Nombre y Apellido</label>
                <input type="text" className={formStyles.input} value={estudiante.nombre} onChange={(evento) => setEstudiante({ ...estudiante, nombre: evento.target.value.trimStart() })} />
                <label>Materia</label>
                <input type="text" className={formStyles.input} value={estudiante.materia} onChange={(evento) => setEstudiante({ ...estudiante, materia: evento.target.value.trimStart() })} />
                <label>Edad</label>
                <input type="number" value={estudiante.edad} onChange={(evento) => setEstudiante({ ...estudiante, edad: evento.target.value.trimStart() })} />
                <button className={formStyles.button}>Enviar</button>
            </form>

            {show && <h3>Formulario enviado con éxito</h3> && <Card estudiante={estudiante} />}

            {error && <h3 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h3>}
        </div>
    )
}

export default Formulario