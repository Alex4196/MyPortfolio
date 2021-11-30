import React from 'react'
/* import styles from "./Footer.module.css"; */
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="Footer"  >
            
            <div  className="footer-Info"> 
            <h1> 📩alexgoumaz@hotmail.com </h1>
            <p> 🏡Based in Buenos Aires, Argentina</p>
            </div>
           {/* <div className="footer-Contact "> 
               <h3> Contact me </h3>
            </div> */}
              <div  className="footer-Sns" >
               
                  <h1></h1>
                   <div className="sns-Links" >
                     
                       <a href="https://linkedin.com/in/alexgoumaz/" target="_blank" >
                            <i  className="fab fa-linkedin linkedin" > </i>
                       </a>
                       <a href="https://github.com/Alex4196" target="_blank" >
                            <i  className="fab fa-github github"  > </i>
                       </a>
                       <a href="https://wa.me/541150046437" target="_blank" >
                            <i  className="fab fa-whatsapp whatsapp"  > </i>
                       </a>
                      
                   </div>
                 
              </div>
        </footer>
    )
}

export default Footer
