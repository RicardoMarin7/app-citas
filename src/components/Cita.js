import React from 'react'
import PropTypes from 'prop-types'

import './styles/Cita.css'

const Cita = ({ cita,eliminarCita }) =>(
    <React.Fragment>
        <div className="Cita__container">
            <p>Paciente: <span>{cita.paciente}</span></p>
            <p>Acompañante: <span>{cita.acompanante}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Cita: <span>{cita.sintomas}</span></p>

            <button 
            className="u-full-width button-primary btn-danger"
            onClick={ () => eliminarCita(cita.id) }
            >Eliminar</button>
        </div>
    </React.Fragment>
)

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired    
}

export default Cita