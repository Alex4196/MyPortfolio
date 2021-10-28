import React from 'react'

import coverVideo from "../Components/coverVideo.mp4"
import styles from "./Cover.module.css"

const Cover = () => {
    return (
        <div className={styles.coverContainer}>
            <video className={styles.video} src={coverVideo} autoPlay loop muted />
            <source src={coverVideo} type="video/mp4" />
           <h1> Alex Goumaz</h1> 
           <p> Web Full Stack Devoloper</p>
           <button onClick={() => window.scrollTo({top:660, behavior:"smooth"})}  className={styles.boton}><h1>Let`s start!</h1></button>
        </div>
    )
}

export default Cover
