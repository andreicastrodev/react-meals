import React from "react";
import HeaderCartButton from "./Header-cart-btn.component";
import styles from "./Header.module.css";
const Header = ({ onShowCart }) => (
  <React.Fragment>
    <h1 className={styles.headerTitle}>React Meals</h1>
    <HeaderCartButton onClickShowCart={onShowCart} />
  </React.Fragment>
);

export default Header;
