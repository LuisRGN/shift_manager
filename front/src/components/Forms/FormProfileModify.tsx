import React, { useState } from 'react'

export const FormProfileModify = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username:""
    })

    const handleChange = (event) => {
        const {name, value } = event.target;
        setInput({
            ...input,[name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput({
            name: "",
            email: "",
            birthdate: "",
            dni: "",
            username:""
        });
        alert("Datos cambiados correctamente")
    }

  return (
    <div>
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Cambie los datos que quiera modificar</h2>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={input.name} onChange={handleChange} autoComplete='off' />

                    <label htmlFor="email">Correo</label>
                    <input type="email" id='email' name='email' value={input.email} onChange={handleChange} autoComplete='off'/>

                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                    <input type="date" id='birthdate' name='birthdate' value={input.birthdate} onChange={handleChange} autoComplete='off'/>

                    <label htmlFor="dni">D.N.I</label>
                    <input type="number" id='dni' name='dni' value={input.dni} onChange={handleChange} autoComplete='off'/>

                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id='username' name='username' value={input.username} onChange={handleChange} autoComplete='off'/>

                    <input type="submit" value="Enviar"/>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
