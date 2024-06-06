import React from 'react';
import './BatterySection.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
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
        <section className="battery-section">
            <h2>Buy Drone <span>Battries</span></h2>
            <div className="battery-container">
                {batteries.map((battery, index) => (
                    <div key={index} className="battery-card">
                        <img src={battery.icon} alt={battery.name} />
                        <p>{battery.name}</p>
                        <div className="price-section">
                            <span className="price">{battery.price}</span>
                            <span className="original-price">{battery.originalPrice}</span>
                            <button className="buy-button">Buy Now</button>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="shop-category-button">
                <button>Shop By Category <span>&rarr;</span></button>
            </div>
        </section>
    );
}

export default BatterySection;
