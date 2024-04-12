import React, { useState } from 'react'
import styles from "./FormContact.module.css"

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
    
        <div className={styles.container}>
          
                <form onSubmit={handleSubmit} className={styles.form}>
                    
                    <div className={styles.div0}>
                     <h2>Contactame</h2>   
                    </div>
                <div className={styles.div1}>
                    <div className={styles.divs}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" value={input.name} onChange={handleChange} />
                        <p style={{visibility: input.name === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                    
                    <div className={styles.divs}>
                        <label htmlFor="email">Correo</label>
                        <input type="email" name="email" id="email" value={input.email} onChange={handleChange} />
                        <p style={{visibility: input.email === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                    </div>
                    
                    <div className={styles.divs}>
                        <label htmlFor="phone">Telefono</label>
                        <input type="number" name="phone" id="phone" value={input.phone} onChange={handleChange} />
                        <p style={{visibility: input.phone === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div>
                </div>
                <div className={styles.divs}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" cols="30" rows="3" value={input.message} onChange={handleChange}/>
                    <p style={{visibility: input.message === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                   
                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>

                </div>
            
              
                </form>
            </div>
  )
}

