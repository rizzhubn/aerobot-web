import React from 'react';
import styles from './Marut.module.css';
import agricopterLogo from "../../assets/MarutLogo.png";
import certify from "../../assets/certify.png";
import image1 from "../../assets/Marut_1.png";
import image2 from "../../assets/Marut_2.png";

const AboutDrone = () => {
  return (
    <div className={styles.container}> 
        <div>
            <button className={styles.backbutton}></button>
            <div className = {styles.backlink}>Back to all</div>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={agricopterLogo} alt="Marut" />
              <div className={styles.certifyBadge}>
                <img src={certify} alt="Certified" />
                <div>DGCA Certified</div>
              </div>
            </div>
            
            <div className={styles.droneImages}>
              <div>
                <img src={image1} alt="Drone Image 1" />
              </div>
              <div>
                <img src={image2} alt="Drone Image 2" />
              </div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.priceDetails}>
                <div className={styles.brandName}>Marut Drones</div>
                <div className={styles.productName}>Agricopter AG365</div>
              </div>
              <div className="flex items-center gap-3">
                <div className={styles.price}>₹ 4,56,892</div>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDrone;