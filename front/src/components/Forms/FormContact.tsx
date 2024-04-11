import React, { useState } from 'react'
import styles from "./Form.module.css"

export const FormContact = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

const handleChange = (event) => {
    const {name, value} = event.target;
    setInput({
        ...input,[name]:value
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    setInput({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    alert("Correo enviado correctamente")
}

const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div>
        <div className={styles.container}>
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Contactame</h2>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" value={input.name} onChange={handleChange} />
                    <p style={{visibility: input.name === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    
                    <label htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" value={input.email} onChange={handleChange} />
                    <p style={{visibility: input.email === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    <label htmlFor="phone">Telefono</label>
                    <input type="number" name="phone" id="phone" value={input.phone} onChange={handleChange} />
                    <p style={{visibility: input.phone === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" cols="30" rows="5"/>
                    <p style={{visibility: input.message === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>
                </form>
            </div>
        </div>
    </div>
  )
}

