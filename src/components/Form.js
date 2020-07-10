import React, {useState} from 'react'

const Form = () =>{

    //State de citas
    const [cita,setCita] = useState({
        paciente:'',
        acompanante:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //Funcion que se ejecuta cada que se escribe en un input
    const handleChange = (e)=>{
        setCita({
            ...cita,
            [e.target.name]:[e.target.value][0]
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('click')
    }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>

                <label>Nombre del Paciente</label>  
                <input 
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre del Paciente"
                    onChange={handleChange}
                />

                <label>Nombre del Acompanante</label>
                <input 
                    type="text"
                    name="acompanante"
                    className="u-full-width"
                    placeholder="Nombre del Acompanante"
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas"
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

export default Form