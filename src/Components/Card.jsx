import React from 'react'

const Card = ({estudiante}) => {
  return (
    <div>
      <h2>{estudiante.nombre} de {estudiante.edad} años, ha sido matriculad@ a la materia {estudiante.materia}</h2>
    </div>
  )
}

export default Card