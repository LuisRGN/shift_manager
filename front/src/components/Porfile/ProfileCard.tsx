import React from 'react'
import avatar from "../../assets/avatar.jpeg"
import styles from "./ProfileCard.module.css"
import { NavLink } from 'react-router-dom'

const ProfileCard = () => {
  return (
    <div>
      <div>
        <h1>Perfil de usuario</h1>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        <h2>Nombre</h2>
        <h2>Correo</h2>
        <h2>Fecha de nacimiento</h2>
        <h2>D.N.I</h2>
        <h2>Nombre de usuario</h2>

        <NavLink to={"/ProfileModify"}>
         <button>Modificar datos</button> 
        </NavLink>
      
        <button>borrar usuario</button>

      </div>
    </div>
  )
}


export default ProfileCard