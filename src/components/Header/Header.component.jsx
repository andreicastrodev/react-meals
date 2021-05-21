import React from "react";
import CartButton from "./Cart/Cart-btn.component";
import styles from "./Header.module.css";
const Header = () => (
  <React.Fragment>
    <h1 className={styles.headerTitle}>React Meals</h1>
    <CartButton />
  </React.Fragment>
);

export default Header;
