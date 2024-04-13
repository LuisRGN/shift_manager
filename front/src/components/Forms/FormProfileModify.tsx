import React, { useState } from 'react'
import axios from "axios"
import styles from "./FormProfileModify.module.css"
import { useNavigate } from 'react-router-dom'
import { PUT_USER_URL } from '../../config/UrlConfig'
import { useSelector } from 'react-redux'
import { State } from '../../interfaces/interfaces'

const PUT_URL = PUT_USER_URL;

export const FormProfileModify: React.FC = () => {
    const navigate = useNavigate();
    const userId = useSelector((state: State) => state.user?.userData?.user?.id)

    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: ""
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
            const response = await axios.put(PUT_URL + userId, input)
            console.log(response.data)
            alert("Datos cambiados correctamente")
            
            navigate("/Profile")
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
               if (error.response && error.response.status === 400) {
                   alert("Nombre de usuario, correo o dni ya existen")
               }   
               }
        }
        
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

                    <input type="submit" value="Enviar" className={styles.enviar}/>
                    
                </form>
            </div>
        </div>
  )
}
