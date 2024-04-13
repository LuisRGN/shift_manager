import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./FormRegister.module.css"
import axios from "axios"
import { POST_REGISTER_URL } from '../../config/UrlConfig';

const REGISTER_URL = POST_REGISTER_URL;

const FormRegister: React.FC = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username:"",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target as HTMLInputElement;
        setInput({
            ...input,[name]: value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL, input)
            console.log("Registrado", response.data.email)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
             console.error(error.message)
            if (error.response && error.response.status === 400) {
                alert("Nombre de usuario, correo o dni ya existen")
            }   
            }
        }
        alert("Formulario enviado correctamente")
        navigate("/Login")
    }

    const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")
    
  return (
    
        <div className={styles.container}>
           

                <form onSubmit={handleSubmit} className={styles.form}>
            
                      <div className={styles.div1}>
                      <h1>Registro</h1>  
                    </div>

                <div className={styles.div2}>
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

                    
                </div>  

                   <div className={styles.divs}>
                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                    <input type="date" id='birthdate' name='birthdate' value={input.birthdate} onChange={handleChange}/>
                    <p style={{visibility: input.birthdate === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>
                    </div> 
                    

                <div className={styles.div3}>
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
                </div>
                    
                   <div className={styles.div4}>
                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>

                    <NavLink to={"/Login"}>
                        <h3>¿Ya estas registrado? Inicia sesión aqui!</h3>
                    </NavLink>
                   </div>
        
                </form>
        </div>
   
  )
}

export default FormRegister

