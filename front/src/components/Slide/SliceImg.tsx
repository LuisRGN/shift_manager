import React from "react";
import styles from "./SliceImg.module.css"
import duty from "../../assets/img/callofduty.jpg"
import dark from "../../assets/img/darksouls.jpg"
import dark3 from "../../assets/img/darksouls3.jpg"
import destiny from "../../assets/img/destiny.jpg"
import halo from "../../assets/img/halo.jpg"
import kakarot from "../../assets/img/kakarot.jpg"
import the from "../../assets/img/thelastofus.jpg"
import vallhala from "../../assets/img/valhalla2.jpg"

const SliceImg = () => {
    return (
        <div className={styles.div}>
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.tag}><img src={duty} alt=""/></div>
            <div className={styles.tag}><img src={dark} alt="" /></div>
            <div className={styles.tag}><img src={dark3} alt="" /></div>
            <div className={styles.tag}><img src={destiny} alt="" /></div>
            <div className={styles.tag}><img src={halo} alt="" /></div>
            <div className={styles.tag}><img src={kakarot} alt="" /></div>
            <div className={styles.tag}><img src={the} alt="" /></div>
            <div className={styles.tag}><img src={vallhala} alt="" /></div>
            <div className={styles.tag}><img src={duty} alt=""/></div>
            <div className={styles.tag}><img src={dark} alt="" /></div>
            <div className={styles.tag}><img src={dark3} alt="" /></div>
            <div className={styles.tag}><img src={destiny} alt="" /></div>
            <div className={styles.tag}><img src={halo} alt="" /></div>
            <div className={styles.tag}><img src={kakarot} alt="" /></div>
            <div className={styles.tag}><img src={the} alt="" /></div>
            <div className={styles.tag}><img src={vallhala} alt="" /></div>
            
            <div className={styles.fade}></div>
        </div>
    </div>
    </div>
    )
}

export default SliceImg