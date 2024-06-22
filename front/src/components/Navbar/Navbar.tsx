// import React from "react";
import styles from "./Navbar.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpeg"
import avatar2 from "../../assets/avatar2.jpeg"
import logo from "../../assets/logo.jpg"
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserTurns } from "../../redux/userSlice";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";

interface State {
    user: {
        userData: {
            login: boolean
        }
    }
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const login = useSelector((state: State) => state.user?.userData?.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  const handleLogout = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Vas a cerrar sesión!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Confirmado',
          text: 'Sesión cerrada',
          icon: 'success'
        });
        navigate('/');
        dispatch(setUserData({}));
        dispatch(setUserTurns([]));
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className={styles.logo} />
          </NavLink>
        </div>
        <button className={styles.hamburgerMenu} onClick={toggleSidebar}>
        {!sidebarOpen && (<span>&#9776;</span>)} {/* Icono de hamburguesa simple con HTML */}
        </button>
        <div className={styles.links}>
          <NavLink to={'/'} className={styles.navLink}>
            <span>HOME</span>
          </NavLink>

          {login && (
            <NavLink to={'/Turns'} className={styles.navLink}>
              <span>TURNOS</span>
            </NavLink>
          )}

          <NavLink to={'/Contact'} className={styles.navLink}>
            <span>CONTACTO</span>
          </NavLink>
          <NavLink to={'/About'} className={styles.navLink}>
            <span>SOBRE LA WEB</span>
          </NavLink>

          {login ? (
            <span onClick={handleLogout} className={styles.navLink}>
              CERRAR SESIÓN
            </span>
          ) : (
            <NavLink to={'/Login'} className={styles.navLink}>
              <span>INICIAR SESIÓN</span>
            </NavLink>
          )}

          {login ? (
            <NavLink to={'/Profile'}>
              <img src={avatar} alt="avatar" className={styles.avatar} />
            </NavLink>
          ) : (
            <NavLink to={'/Login'}>
              <img src={avatar2} alt="avatar2" className={styles.avatar} />
            </NavLink>
          )}
        </div>
      </div>

      {sidebarOpen && (
        <div className={styles.sidebar} ref={sidebarRef}>
          <div className={styles.sidebarContent}>
            <NavLink to={'/'} className={styles.navLink} onClick={toggleSidebar}>
              <span>HOME</span>
            </NavLink>
            {login && (
              <NavLink to={'/Turns'} className={styles.navLink} onClick={toggleSidebar}>
                <span>TURNOS</span>
              </NavLink>
            )}
            <NavLink to={'/Contact'} className={styles.navLink} onClick={toggleSidebar}>
              <span>CONTACTO</span>
            </NavLink>
            <NavLink to={'/About'} className={styles.navLink} onClick={toggleSidebar}>
              <span>SOBRE LA WEB</span>
            </NavLink>
            {login ? (
              <span onClick={() => { handleLogout(); toggleSidebar(); }} className={styles.navLink}>
                CERRAR SESIÓN
              </span>
            ) : (
              <NavLink to={'/Login'} className={styles.navLink} onClick={toggleSidebar}>
                <span>INICIAR SESIÓN</span>
              </NavLink>
            )}
            {login ? (
              <NavLink to={'/Profile'} onClick={toggleSidebar}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
              </NavLink>
            ) : (
              <NavLink to={'/Login'} onClick={toggleSidebar}>
                <img src={avatar2} alt="avatar2" className={styles.avatar} />
              </NavLink>
            )}
            <button className={styles.close} onClick={toggleSidebar}>CERRAR</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;