// import React from 'react'
import styles from "./SliceAbout.module.css"
import orm from "../../assets/imgT/orm.png"
import redux from "../../assets/imgT/redux.webp"
import typescript from "../../assets/imgT/typescript.png"
import express from "../../assets/imgT/express.jpg"
import postgres from "../../assets/imgT/postgres.png"
import react from "/react.svg"
import vite from "/vite.svg"

export const SliceAbout = () => {
  return (
    <div className={styles.div}>
       <div className={styles.container}>
        <h1>Tecnologias utilizadas</h1>
        <div className={styles.inner}>
            <div className={styles.tag}><img src={orm} alt=""/></div>
            <div className={styles.tag}><img src={redux} alt="" /></div>
            <div className={styles.tag}><img src={typescript} alt="" /></div>
            <div className={styles.tag}><img src={express} alt="" /></div>
            <div className={styles.tag}><img src={postgres} alt="" /></div>
            <div className={styles.tag}><img src={react} alt="" /></div>
            <div className={styles.tag}><img src={vite} alt="" /></div>
            <div className={styles.tag}><img src={orm} alt="" /></div>
            <div className={styles.tag}><img src={redux} alt="" /></div>
            <div className={styles.tag}><img src={typescript} alt="" /></div>
            <div className={styles.tag}><img src={express} alt=""/></div>
            <div className={styles.tag}><img src={postgres} alt="" /></div>
            <div className={styles.tag}><img src={react} alt="" /></div>
            <div className={styles.tag}><img src={vite} alt="" /></div>
            
            <div className={styles.fade}></div>
        </div>
    </div>
    </div>
  )
}
