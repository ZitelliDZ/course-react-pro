import React, { useState } from 'react'


interface Usuario{
    uid: string;
    nombre: string;
    apellido: string;
}

const Usuario = () => {

    const [usuario, setUsuario] = useState<Usuario>()

   
    const login = () => {
        setUsuario({
            uid: '123',
            nombre: 'Juan',
            apellido: 'Pérez'
        })
    }

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>
      <p>{JSON.stringify(usuario,null,2)}</p>
      <button onClick={() => login()}>Login</button>
      <hr />
      
    </div>
  )
}

export default Usuario
