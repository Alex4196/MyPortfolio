import React from 'react'
import styles from "./Info.module.css"
import react from "./react.svg"
import js from "./js.svg"
import ts from "./ts.svg"
import nodejs from "./nodejs.svg"
import express from "./express.svg"
import sql from "./sql.svg"
import html from "./html.svg"
import css from "./css.svg"
import sequelize from "./sequelize.svg"
const Info = () => {
    return (
        <div  className={styles.infoContainer} >
            <div className={styles.info}>
                  <h1>  <img className={styles.icon}  src={js}/> Javascript || <img className={styles.icon}  src={ts}/>Typescript || <img  className={styles.icon}  src={react}/> React-Redux || <img className={styles.icon}   src={nodejs}/>  Node.js || <img className={styles.icon}   src={express}/>  Express || <img className={styles.icon}   src={sql}/> postgreSQL || <img className={styles.icon}   src={sequelize}/> sequelize {/* || <img className={styles.icon}   src={html}/>HTML || <img className={styles.icon}   src={css}/> CSS */} </h1>
            </div>
            
        </div>
    )
}

export default Info
