import React, {useState} from 'react'
import {v4 as UUID} from 'uuid'
import PropTypes from 'prop-types'

const Form = ({crearCita}) =>{

    //State de citas -> aqui se guardan los valores del formulario o su state
    const [cita,setCita] = useState({
        id:'',
        paciente:'',
        acompanante:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //State de Errores
    const [error,setError] = useState(false)
    const [send,setSend] = useState(false)

    //Funcion que se ejecuta cada que se escribe en un input
    const handleChange = (e)=>{
        setCita({
            ...cita,
            [e.target.name]:[e.target.value][0]
        })
    }

    // Extraer datos del formulario guardados en "cita"
    const { paciente, acompanante, fecha, hora, sintomas } = cita

    const handleSubmit = e =>{
        e.preventDefault()

        if(paciente.trim() === '' || 
            acompanante.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''){
            setError(true)
            return;
        }
    
        //Si ya no hay errores quitamos el error
        setError(false)
        //Si ya se envio el formulario mostramos que se envio
        setSend(true)
        //Lo desaparecemos
        setTimeout(() => {
            setSend(false)
        }, 3000);

        //Asignamos ID

        cita.id = UUID()
        //Crear Cita
        crearCita(cita)

     
        //Reiniciamos el formulario y asignamos otro id
        setCita({
            paciente:'',
            acompanante:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return(
        <React.Fragment>
            {error ? <p className="alert-error">Todos los campos son obligatorios</p> : null}
            {send ? <p className="alert-send">Formulario enviado</p> : null}
            <form onSubmit={handleSubmit}>

                <label>Nombre del Paciente</label>  
                <input 
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre del Paciente"
                    value={paciente}
                    onChange={handleChange}
                />

                <label>Nombre del Acompanante</label>
                <input 
                    type="text"
                    name="acompanante"
                    className="u-full-width"
                    placeholder="Nombre del Acompanante"
                    value={acompanante}
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    value={fecha}
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    value={hora}
                    onChange={handleChange}
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas"
                    value={sintomas}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>

            </form>
        </React.Fragment>
    )
}

Form.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Form