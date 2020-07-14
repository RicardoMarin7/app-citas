import React,{ useState, useEffect } from 'react'
import Form from './Form'
import Cita from './Cita'

import './styles/App.css'

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }

  const [citas,setCitas] = useState(citasIniciales)
  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administra Tus Citas'

  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas,citasIniciales])

  

  //Funcion que tome las citas actuales y agrege una 
  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id =>{
    setCitas(citas.filter( cita => cita.id !== id ))
  }


  return (
    <main>
      <h1 className="App__title">Administrador de Pacientes</h1>
      <div className="App__container">
        <div className="App__form">
          <h2>Crear Cita</h2>
          <Form 
           crearCita={crearCita}
          />
        </div>

        <div className="App__appointments">
          <h2>{titulo}</h2>
          {citas.map(cita =>(
            <Cita 
              eliminarCita = {eliminarCita}
              key={cita.id}
              cita={cita}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
