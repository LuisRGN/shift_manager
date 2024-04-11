import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./FormRegister.module.css"

const FormRegister = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username:"",
        password: ""
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
            username:"",
            password: ""
        });
        alert("Formulario enviado correctamente")
    }

    const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")
    
  return (
    <div>
        <div className={styles.container}>
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Registro</h2>
                    <div className={styles.divs}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={input.name} onChange={handleChange} />
                    <p style={{visibility: input.name === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    <div className={styles.divs}>
                    <label htmlFor="email">Correo</label>
                    <input type="email" id='email' name='email' value={input.email} onChange={handleChange}/>
                    <p style={{visibility: input.email === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    <div className={styles.divs}>
                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                    <input type="date" id='birthdate' name='birthdate' value={input.birthdate} onChange={handleChange}/>
                    <p style={{visibility: input.birthdate === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    <div className={styles.divs}>
                    <label htmlFor="dni">D.N.I</label>
                    <input type="number" id='dni' name='dni' value={input.dni} onChange={handleChange} />
                    <p style={{visibility: input.dni === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    <div className={styles.divs}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id='username' name='username' value={input.username} onChange={handleChange} />
                    <p style={{visibility: input.username === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    <div className={styles.divs}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" value={input.password} onChange={handleChange} />
                    <p style={{visibility: input.password === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                   
                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>
                    
                    

                    <NavLink to={"/Login"}>
                        <h3>¿Ya estas registrado? Inicia sesión aqui!</h3>
                    </NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormRegister

