import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import styles from "./Slider.module.css"


const Slider = () => {
    return (
        <div  className= {styles.carouselContainer} >
           <div classname={styles.carouselTitle}> 
               <h2  classname={styles.carouselTitle}   > My Projects </h2>
           </div>

          { <Carousel 
               plugins={['arrows']}
                /* slidesPerPage={3} */
               infinite
              /*  animationSpeed={200}
               centered
               offset={50}
               itemWidth={400} 
               centered */
               slides={Slides}
               breakpoints={{
                   960: {
                       slidesPerPage:1,
                       arrows: false,
                       itemwidth:250,
                       
                   }
               }}

           
           />}
            
        </div>
    )
}

export default Slider
