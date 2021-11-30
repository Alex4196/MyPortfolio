import React from "react";
import styles from "./Slider.module.css"

const slidesInfo = [
    {
        src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
        alt: "16BitGameStore",
        desc: "16BitGameStore",
        link: "https://16-bit-gamestore.vercel.app/" 
    },
 /*    {
        src: "https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        alt: "clima",
        desc: "Weather App",
        link: "https://weather-ten-mu.vercel.app/"
    }, */
    {
        src: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "TheUltimateFoodApp",
        desc: "TheUltimateFoodApp",
        link:"//www.linkedin.com/feed/update/urn:li:activity:6847615077936308224/?commentUrn=urn%3Ali%3Acomment%3A(ugcPost%3A6847602703862915072%2C6847615034089062401)"
    },
    {
        src: "https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        alt: "clima",
        desc: "Weather App",
        link: "https://weather-ten-mu.vercel.app/"
    },
     {
        src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "greenpine",
        desc: "The green Pine",
        link: "https://greenpine.vercel.app/"
    },  
    {
        src: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "greenpine",
        desc: "Marvel",
        link: "https://marvel-nine-omega.vercel.app/"
    }, 
]

const Slides = slidesInfo.map(slide => (

    <div className={styles.slideContainer} >
        <a href={slide.link} target="_blank" >
        <img  src={slide.src}  alt={slide.alt} />
        </a>
   <div className={styles.slideDesc}  > 
   <span> {slide.desc} </span>
     </div>

         </div>
))

export default Slides;