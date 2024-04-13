import React, { useState } from 'react'
import styles from "./FormProfileModify.module.css"
import { useNavigate } from 'react-router-dom'

export const FormProfileModify: React.FC = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username:""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target as HTMLInputElement;
        setInput({
            ...input,[name]: value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput({
            name: "",
            email: "",
            birthdate: "",
            dni: "",
            username:""
        });
        alert("Datos cambiados correctamente")
        navigate("/Profile")
    }

  return (
        <div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.div1}>
                       <h1>Cambie los datos que quiera modificar</h1> 
                    </div>
                    
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

                    <input type="submit" value="Enviar" className={styles.enviar}/>
                    
                </form>
            </div>
        </div>
  )
}
