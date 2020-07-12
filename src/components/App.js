import React,{ useState } from 'react';
import Form from './Form'

import './styles/App.css'

function App() {

  const [citas,setCitas] = useState([])

  //Funcion que tome las citas actuales y agrege una 
  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])

    console.log(citas)
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
          <h2>Citas</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
