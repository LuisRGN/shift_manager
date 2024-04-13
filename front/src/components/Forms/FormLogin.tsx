import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
import styles from "./FormLogin.module.css"
import war from "../../assets/img/war.jpg"
import war2 from "../../assets/img/war2.jpg"
import { POST_LOGIN_URL } from '../../config/UrlConfig';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/userSlice';

const LOGIN_URL = POST_LOGIN_URL;

const FormLogin: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        username: "",
        password: ""
    })

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement;
    setInput({
        ...input, [name]:value
    })
}

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
    const response = await axios.post(LOGIN_URL, input)
    const data = response.data
    dispatch(setUserData(data))
    alert("Inicio de sesión exitoso")
    navigate("/");
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
            if (error.response && error.response.status === 400) {
                alert("Usuario o contraseña incorrecto");
            } else {
                alert("Error de conexión o servidor");
            }
        }
    }
    
}

const allFiledsComplete = Object.values(input).every(value => value.trim() !== "")

  return (
    <div className={styles.main}>
        <img src={war} alt="" className={styles.war}/>
        <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1>Inicio de sesion</h1>
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
            <img src={war2} alt="" className={styles.war2}/>
    </div>
  )
}

export default FormLogin
