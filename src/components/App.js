import React from 'react';
import Form from './Form'

import './styles/App.css'

function App() {
  return (
    <main>
      <h1 className="App__title">Administrador de Pacientes</h1>
      <div className="App__container">
        <div className="App__form">
          <h2>Crear Cita</h2>
          <Form />
        </div>
        <div className="App__appointments">
          <h2>App de citas</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
