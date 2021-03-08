import React, { useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cita from './Components/Cita';


function App() {

  // Citas en localstorage
  // comprobar si hay citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = []; // si no hay nada entonces inicia con [] vacio
  }

  const [citas, guardarCitas] = useState(citasIniciales); // el valor inicial del useState va a ser lo q este en localstorage

  // UseEffect para realizar operaciones cuando cambia el state
  // Se ejecuta cuando el componente está y listo y cuando hay cambios en el mismo
  useEffect( () => { 
    localStorage.setItem('citas', JSON.stringify(citas)) // le pasamos las citas del state q carga la primera vez lo q tenemos en localstorage
  }, [citas]); // arreglo vacio --> pasarle []. Cada vez q citas cambie (xq esta dentro del arreglo) se vuelve a ejecutar el effect

  // Eliminar citas x Id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id); // filter itera en todas las citas como un foreach o map, accedemos a cada cita de forma individual
    guardarCitas(nuevasCitas);
  }

  // Leer nuevas citas y citas actuales
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // Mnsj Condicional
  const titulo = citas.length === 0 ? 'No hay citas, agrega una!' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => ( // map itera en el arreglo
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      
      </div>
    </>
  );
}

export default App;
