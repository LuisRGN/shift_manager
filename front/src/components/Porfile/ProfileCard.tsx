// import React from 'react'
import { useEffect } from "react"
import avatar from "../../assets/avatar.jpeg"
import styles from "./ProfileCard.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { State } from "../../interfaces/interfaces"


const ProfileCard = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: State) => state.user?.userData?.user?.id)
  const name = useSelector((state: State) => state.user?.userData?.user?.name)
  const email = useSelector((state: State) => state.user?.userData?.user?.email)
  const birthdate = useSelector((state: State) => state.user?.userData?.user?.birthdate)
  const dni = useSelector((state: State) => state.user?.userData?.user?.dni)

  useEffect(() => {
    if (!userId) navigate("/Login")
 }, [navigate, userId])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1>Perfil de usuario</h1>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{birthdate}</h2>
        <h2>{dni}</h2>

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