import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {
    // State citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, actualizarError] = useState(false)


    // Ejecuta cuando el usuario escribe un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita, // copia a la instancia para que se actualize
            [e.target.name]:e.target.value  
        })
    }

    const [success, actualizarSuccess] = useState(false)

    // Valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Enviar formulario
    const submitCita = (e) => {
        e.preventDefault();
        // Validación
        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            actualizarError(true);
            return;
        } 
        // Eliminar mnsj error
        actualizarError(false);

        // Id
        cita.id = uuid();
        // Crear cita
        crearCita(cita);
        // Reset form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });

        if(cita != "") {
            actualizarSuccess(true);
            return;
        }
    }

    return ( 
        <div>
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCita}
            >
                <label>Nombre</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-widht"
                    placeholder="Nombre"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-widht"
                    placeholder="Apellido"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                {error ? <Alert severity="error" className="fs-15 mb-20"><strong>Error: </strong>Todos los campos son obligatorios</Alert> : null}
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
                {success ? <Alert severity="success" className="fs-15 mt-10"><strong>Success: </strong>Formulario enviado con éxito.</Alert> : null}
            </form>
        </div>
     );
}
 
export default Formulario;