import React from "react";
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.jpeg"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
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
         <NavLink to={"/Turns"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>TURNOS</span>
         </NavLink>
         <NavLink to={"/Contact"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>CONTACTO</span>
         </NavLink>
         <NavLink to={"/About"} className={({ isActive}) => isActive ? styles.active : ""}>
            <span>SOBRE LA WEB</span>
         </NavLink>
         <NavLink to={"/Login"} >
            <span>INICIAR SESIÓN</span>
         </NavLink>
        <NavLink to={"/Profile"}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        </NavLink>
         
        </div>
        
    </div>
    </>
)
}

export default Navbar