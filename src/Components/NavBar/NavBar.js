import React from 'react'
import styles from "./NavBar.module.css"

const NavBar = ({isScrolling}) => {

const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
}

    return (
        <nav className={`${styles.navbar} ${isScrolling > 20 ? styles.scrolling: null}`}  >
            <div  onClick={() => window.scrollTo({top:660, behavior:"smooth"})} className={styles.navBarLogo} /* onClick={toTheTop} */>
                About me
            </div>
            <div onClick={() => window.scrollTo({top:1800, behavior:"smooth"})} className={styles.navBarLogo} >
            Personal skills
            </div>
            <div  onClick={() => window.scrollTo({top:2200, behavior:"smooth"})} className={styles.navBarLogo} >
            Technical skills
            </div>
            <div onClick={() => window.scrollTo({top:1350, behavior:"smooth"})} className={styles.navBarLogo} >
            My Projects
            </div>
            <div onClick={() => window.scrollTo({top:3000, behavior:"smooth"})}  className={styles.navBarLogo} >
            Contact me
            </div>
            


        </nav>
    )
}

export default NavBar
