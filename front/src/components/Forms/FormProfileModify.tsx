import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./FormProfileModify.module.css"
import { useNavigate } from 'react-router-dom'
import { GET_USER_ID_URL, PUT_USER_URL } from '../../config/UrlConfig'
import {  useDispatch, useSelector } from 'react-redux'
import { State } from '../../interfaces/interfaces'
import { updateUserDetails } from '../../redux/userSlice'
import Swal from 'sweetalert2'


const PUT_URL = PUT_USER_URL;
const GET_URL = GET_USER_ID_URL;

export const FormProfileModify: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector((state: State) => state.user?.userData?.user?.id)
    
    const [input, setInput] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username: "",
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
            const response = await axios.put(PUT_URL + userId, input)
            response // para no tener error de la variable
            const getResponse = await axios.get(GET_URL + userId)
            dispatch(updateUserDetails(getResponse.data))
            Swal.fire({
                title:"Datos modificados correctamente",
                icon: "success" 
            })
            navigate("/Profile")
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
               if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title:"No se pudieron modificar los datos",
                        icon:"error" 
                    })
               }   
               }          
    } 
}

useEffect(() => {
    if (!userId) navigate("/Login")
 }, [navigate, userId])

  return (
        <div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.div1}>
                       <h2>Cambie los datos que quiera modificar</h2> 
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

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' name='password' value={input.password} onChange={handleChange} autoComplete='off'/>

                    <input type="submit" value="Enviar" className={styles.enviar}/>
                    
                </form>
            </div>
        </div>
  )
}
