import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
return (
    <div className={styles.container}>
    <footer className={styles.footer}>
        <span>
            Hecho por <strong>Luis Gonzalez</strong><br />
            Todos los derechos resrevados &copy; 2024
        </span>
    </footer>
</div>
)
}

export default Footer