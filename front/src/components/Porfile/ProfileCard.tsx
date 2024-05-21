// import React from 'react'
import { useEffect } from "react"
import avatar from "../../assets/avatar.jpeg"
import styles from "./ProfileCard.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { State, UserData } from "../../interfaces/interfaces"
import axios from "axios"
import { DELETE_USER_URL } from "../../config/UrlConfig"
import { setUserData, setUserTurns } from "../../redux/userSlice"
import Swal from "sweetalert2"

const DELETE_USER = DELETE_USER_URL



const ProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: State) => state.user?.userData?.user?.id)
  const userData = useSelector((state: State) => state.user?.userData)
  const userData2 = useSelector((state: UserData) => state.user?.userData)

  const handleDelete = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Vas a borrar al usuario, estás seguro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, lo quiero eliminar!",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(DELETE_USER + userId);
          console.log(response.data);
          dispatch(setUserData({}));
          dispatch(setUserTurns([]));
          Swal.fire(
            "Eliminado!",
            "El usuario ha sido eliminado correctamente.",
            "success"
          );
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error(error.message);
            if (error.response && error.response.status === 400) {
              Swal.fire({
                title: "No se pudo borrar el usuario",
                icon: "error"
              });
            }
          }
        }
      }
    });
  };
useEffect(() => {
  if (!userId) navigate("/Login")
}, [navigate, userId])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1>Perfil de usuario</h1>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        <h2>{userData2?.name ? userData2.name : userData?.user?.name}</h2>
        <h2>{userData2?.email ? userData2.email : userData?.user?.email}</h2>
        <h2>{userData2?.birthdate ? new Date(userData2.birthdate).toDateString() : userData?.user?.birthdate ? new Date(userData.user.birthdate).toDateString() : ""}</h2>
        <h2>{userData2?.dni ? userData2.dni : userData?.user?.dni }</h2>

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