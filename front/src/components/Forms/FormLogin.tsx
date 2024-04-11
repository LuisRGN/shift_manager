import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Form.module.css"

const FormLogin = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

const handleChange = (event) => {
    const {name, value} = event.target;
    setInput({
        ...input, [name]:value
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    setInput({
        username: "",
        password: ""
    })
    alert("Inicio de sesión exitoso")
}

const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div>
        <div className={styles.container}>
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Inicio de sesion</h2>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" name="username" id="username" value={input.username} onChange={handleChange}/>
                    <p style={{visibility: input.username === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password"value={input.password} onChange={handleChange}/>
                    <p style={{visibility: input.password === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>

                    <NavLink to={"/Register"}>
                        <h3>¿No estas registrado? Hazlo aqui!</h3>
                    </NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormLogin
