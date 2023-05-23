import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu Apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu Telefono"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Form;
