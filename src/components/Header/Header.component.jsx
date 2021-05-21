import React from "react";
import styles from "./Header.module.css";
const Header = () => (
  <React.Fragment>
    <h1 className={styles.headerTitle}>React Meals</h1>
    <h1>Cart</h1>
  </React.Fragment>
);

export default Header;
