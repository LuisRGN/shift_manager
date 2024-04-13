// import React from "react";
import styles from "./Navbar.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpeg"
import avatar2 from "../../assets/avatar2.jpeg"
import logo from "../../assets/logo.jpg"
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserTurns } from "../../redux/userSlice";

interface State {
    user: {
        userData: {
            login: boolean
        }
    }
}

const Navbar = () => {
const login = useSelector((state: State) => state.user?.userData?.login)
const navigate = useNavigate()
const dispatch = useDispatch()

const handleLogout = () => {
    const confirmed = confirm("Vas a cerrar sesión")
    if(confirmed){
        navigate("/")
        dispatch(setUserData({}))
        dispatch(setUserTurns([]))
    }
}

return (
    <>
    
    <div className={styles.container}>
        <div>
            <NavLink to={"/"}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </NavLink>
        </div>
        
        <div className={styles.links}>
          <NavLink to={"/"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>HOME</span>
        </NavLink>

        {
          login && <NavLink to={"/Turns"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>TURNOS</span>
         </NavLink> 
        }
         
         <NavLink to={"/Contact"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>CONTACTO</span>
         </NavLink>
         <NavLink to={"/About"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>SOBRE LA WEB</span>
         </NavLink>
         
         {
          login  ?  <span onClick={handleLogout} className={styles.cursor}>CERRAR SESIÓN</span> :
            <NavLink to={"/Login"} >
            <span>INICIAR SESIÓN</span>
            </NavLink> 
         }
        {
        
        login ? <NavLink to={"/Profile"}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        </NavLink> : <NavLink to={"/Login"}>
                     <img src={avatar2} alt="avatar2" className={styles.avatar} />
                     </NavLink> 
        }
        
         
        </div>
        
    </div>
    </>
)
}

export default Navbar