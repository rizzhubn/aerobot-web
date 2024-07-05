import React, { useState } from "react";
import styles from './BatteryDrone.module.css';
import Battery1 from '../../assets/BatteryDetImages/DroneImageBig.png'
import Battery2 from '../../assets/BatteryDetImages/DroneImagesmall1.png'
import Battery3 from '../../assets/BatteryDetImages/DroneImagesmall2.png'
import Battery4 from '../../assets/BatteryDetImages/DroneImagesmall3.png'
import plus from '../../assets/Signs/plus.png'
import minus from '../../assets/Signs/minus.png'
import delivery from '../../assets/Signs/Delivery.png'

const DroneBattery = () => {
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <h1>mPower 6S 25200 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector</h1>
        <p>
          mPower 6S 25200 mAh Lithium Ion Battery Pack is a high-quality battery for all popular models of 10, 12 and 16-litre agricultural drones in India.
          A set of mPower 6S 25200 sprays over 650 acres. Ships within 2 days. It is India's first battery to carry a 6 month or 80% DoD warranty, whichever
          occurs first. If your drone uses a different battery cover or the size mentioned would not fit your drone, please send a custom enquiry or reach
          out to us over call or WhatsApp.
        </p>
        <div className={styles.Bimage}>
        <div className={styles.Battery1image}><img src={Battery1}/></div>
        <div className={styles.images}>
          <img src={Battery2} alt="Battery Image 2" />
          <img src={Battery3} alt="Battery Image 3" />
          <img src={Battery4} alt="Battery Image 4" />
          <div className={styles.moreImages}>+2</div>
        </div>
        </div>
      </div>
      <div className={styles.purchaseinfo}>
      <div className={styles.price}>
        <span>Price</span>
        <div className={styles.right}>
          <span className={styles.originalPrice}>₹ 49,000</span>
          <span className={styles.discountedPrice}>₹ 38,232</span>
          <span className={styles.perPiece}>/Piece (GST inc.)</span>
        </div>
      </div>
      <div className={styles.delivery}>
        <span>Delivery</span>
        <span>Free</span>
      </div>
      <div className={styles.pincode}>
        <label>Delivery location pincode</label>
        <div className={styles.check}>
        <input type="text" placeholder="Pincode" />
        <button>Check Pincode</button>
        </div>
      </div>
      <div className={styles.quantity}>
        <label>Select quantity</label>
        <div className={styles.quantitySelector}>
        <div className={styles.minus}>
          <button onClick={decreaseQuantity}><img src={minus}/></button></div>
          <span>{quantity}</span>
          <div className={styles.plus}>
          <button onClick={increaseQuantity}><img src={plus}/></button></div>
        </div>
      </div>
      <div className={styles.extraInfo}>
        <p>Maximum Order Quantity is 6 set. Need a <a href="#">Bulk Order</a> or <a href="#">Custom order?</a></p>
        <p>Need a custom order or have any doubts? <a href="#">Call us</a> or <a href="#">Whatsapp</a></p>
      </div>
      <div className={styles.shipping}>
        <img src={delivery}/>
        <span>Ships within 48 hrs after receiving order</span>
      </div>
      <button className={styles.buyButton}>Buy Now</button>
    </div>
    </div>
  );
};

export default DroneBattery;