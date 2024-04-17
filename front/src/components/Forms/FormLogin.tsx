import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
import styles from "./FormLogin.module.css"
import { POST_LOGIN_URL } from '../../config/UrlConfig';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/userSlice';
import Swal from 'sweetalert2';
import { validateLogin } from '../../helpers/validateLogin';

const LOGIN_URL = POST_LOGIN_URL;

const FormLogin: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const [errors, setErros] = useState({
        username: "",
        password: ""
    })

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement;
    setInput({
        ...input, [name]:value
    })
    setErros(prevError => ({
        ...prevError, 
        [name]: validateLogin({...input, [name]: value})[name]
    }))
}

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
    const response = await axios.post(LOGIN_URL, input)
    const data = response.data
    dispatch(setUserData(data))
    Swal.fire({
        title: "Inicio de sesión exitoso",
        icon: "success"
    })
    navigate("/");
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    title:"Usuario o contraseña incorrecto",
                    icon:"warning" 
                })
            } else {
                Swal.fire({
                    title:"Error de conexión o servidor",
                    icon:"error"
                })
            }
        }
    } 
}

const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div className={styles.main0}>
        <div>
    <div className={styles.main}>
        <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Inicio de sesion</h1>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" name="username" id="username" value={input.username} onChange={handleChange}/>
                    <p style={{opacity: errors.username ? 1 : 0, minHeight: "20px"}}>{errors.username}</p>

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password"value={input.password} onChange={handleChange}/>
                    <p style={{opacity: errors.password ? 1 : 0, minHeight: "20px"}}>{errors.password}</p>

                    <input type="submit" value="Enviar" disabled={!allFiledsComplete} className={styles.enviar}/>

                    <NavLink to={"/Register"}>
                        <h3>¿No estas registrado? Hazlo aqui!</h3>
                    </NavLink>
                </form>
            </div>
    </div>
    </div>
    </div>
  )
}

export default FormLogin
