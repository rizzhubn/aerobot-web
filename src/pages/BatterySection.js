import React from 'react';
import styles from './index.module.css';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
const batteries = [
    {
        name: 'mPower 6S 25200 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector',
        price: '₹2000',
        originalPrice: '₹3000',
        icon: image1
    },
    {
        name: 'mPower 6S 21000 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector',
        price: '₹2000',
        originalPrice: '₹3000',
        icon: image2
    },
    {
        name: 'mPower 6S 16800 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector',
        price: '₹2000',
        originalPrice: '₹3000',
        icon: image3
    }
];

function BatterySection() {
    return (
        <section className= {styles.batterysection}>
            <h2>Buy Drone <span>Battries</span></h2>
            <div className= {styles.batterycontainer}>
                {batteries.map((battery, index) => (
                    <div key={index} className= {styles.batterycard}>
                        <img src={battery.icon} alt={battery.name} />
                        <p>{battery.name}</p>
                        <div className={styles.pricesection}>
                            <span className= {styles.price}>{battery.price}</span>
                            <span className={styles.originalprice}>{battery.originalPrice}</span>
                            <button className={styles.buybutton}>Buy Now</button>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className={styles.shopcategorybutton}>
                <button>Shop By Category <span>&rarr;</span></button>
            </div>
        </section>
    );
}

export default BatterySection;
