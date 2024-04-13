// import React from 'react'
import { useEffect } from "react"
import avatar from "../../assets/avatar.jpeg"
import styles from "./ProfileCard.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

interface State {
  user: {
      userData: {
          user: {
              id: number;
          }
      }
  }
}

const ProfileCard = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: State) => state.user?.userData?.user?.id)
  
  useEffect(() => {
    if (!userId) navigate("/Login")
 }, [navigate, userId])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.div1}>
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
    </div>
  )
}


export default ProfileCard