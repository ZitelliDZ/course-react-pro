import React from "react";
import { useForm } from "./../Hooks/useForm";


interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

const Formulario = () => {
  const { formulario, handleInputChange } = useForm<FormData>({
    nombre: 'Diego Zitelli',
    mensaje: 'dd',
    email: 'asdf@gmail.com',
  });

  
  return (
    <form action="">
      <h3>Formulario</h3>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          className="form-control"
          type="text"
          name="nombre"
          id="nombre"
          value={formulario.nombre}
          onChange={(ev) => handleInputChange(ev)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={formulario.email}
          onChange={(ev) => handleInputChange(ev)}
        />
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <input
          className="form-control"
          type="text"
          name="mensaje"
          id="mensaje"
          value={formulario.mensaje}
          onChange={(ev) => handleInputChange(ev)}
        />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>

      {JSON.stringify(formulario, null, 2)}
    </form>
  );
};

export default Formulario;
