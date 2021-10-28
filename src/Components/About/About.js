import React from 'react'
import styles from "./About.module.css"
import photo from "./portfolio.jpg"


const About = () => {
    return (
        <div  className={styles.aboutContainer}>
           <div className={styles.aboutDescription}> 
            <div className={styles.title}> Let me tell you something about me! </div> 
           <h4 className={styles.text}> Hi🖐! I am from Argentina and I am a young 👨‍🎓 enthusiast eager to train
and progress in the IT  sector. I found my true passion in the code and I really enjoy programming. What motivates me is to belong to
a work team where I can provide my knowledge, my ability to lead, learn new
technologies 💻 and be a better professional 👨‍💻 every day.
           </h4>
               </div> 
               <div  className={styles.img}  > 
               
               <img   src={photo} alt="img not found" className={styles.img} />
               
               </div>
            
        </div>
    )
}

export default About
