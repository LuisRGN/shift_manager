// import React from 'react'
import { useEffect } from "react"
import avatar from "../../assets/avatar.jpeg"
import styles from "./ProfileCard.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { State } from "../../interfaces/interfaces"
import axios from "axios"
import { DELETE_USER_URL } from "../../config/UrlConfig"
import { setUserData, setUserTurns } from "../../redux/userSlice"

const DELETE_USER = DELETE_USER_URL


const ProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: State) => state.user?.userData?.user?.id)
  const name = useSelector((state: State) => state.user?.userData?.user?.name)
  const email = useSelector((state: State) => state.user?.userData?.user?.email)
  const birthdate = useSelector((state: State) => state.user?.userData?.user?.birthdate)
  const dni = useSelector((state: State) => state.user?.userData?.user?.dni)
  
  

  useEffect(() => {
    if (!userId) navigate("/")
 }, [navigate, userId])

const handleDelete = async () => {
   const confirmed = confirm("Vas a borrar al usuario, estas seguro!!")
   if(confirmed) {
    try {
      const response = await axios.delete(DELETE_USER + userId)
        console.log(response.data)
        dispatch(setUserData({}))
        dispatch(setUserTurns([]))
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.message)
     if (error.response && error.response.status === 400) {
         alert("No se pudo borrar el usuario")
     }   
     }
  }
 }
}

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
      
        <button onClick={handleDelete}>borrar usuario</button>
        </div>
      </div>
    </div>
  )
}


export default ProfileCard