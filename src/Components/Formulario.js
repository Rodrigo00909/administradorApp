import React, { useState } from 'react';

const Formulario = () => {
    // State citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    // Ejecuta cuando el usuario escribe un input
    const actualizarState = () => {
        console.log("escribiendo")
    }

    return ( 
        <div>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-widht"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-widht"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-widht"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-widht"
                    onChange={actualizarState}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </div>
     );
}
 
export default Formulario;