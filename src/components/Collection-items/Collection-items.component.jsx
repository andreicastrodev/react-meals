import React from "react";
import CollectionItem from "../Collection-item/Collection-item.component";
import styles from "./Collection-items.module.css";
const CollectionItems = ({ items }) => (
  <React.Fragment>
    <div className={styles.collectionItem}>
      {items.map((item) => (
        <CollectionItem
          title={item.title}
          price={item.price}
          description={item.description}
          key={item.id}
        />
      ))}
    </div>
  </React.Fragment>
);

export default CollectionItems;
