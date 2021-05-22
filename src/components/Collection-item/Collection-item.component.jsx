import React from "react";
import styles from "./Collection-item.module.css";
const CollectionItem = ({ title, price, description }) => (
  <div className={styles.CollectionItem}>
    <div className={styles.CollectionItem_title}>
      <h2 className={styles.CollectionItem_name}>{title}</h2>
      <div className={styles.CollectionItem_input}>
        <h2>Amount</h2>
        <input className={styles.CollectionItem_inputAmount} type="number" />
      </div>
    </div>
    <div className={styles.CollectionItem_description}>
      <p className={styles.CollectionItem_desc}>{description}</p>
      <button className={styles.CollectionItem__button}>Add</button>
    </div>
    <div className={styles.CollectionItem_price}>
      <h2 className={styles.CollectionItem__tag}>${price.toFixed(2)}</h2>
    </div>
  </div>
);

export default CollectionItem;
