import CartIcon from "../Cart/Cart-icon";
import styles from "./Header-cart-btn.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = ({ onClickShowCart }) => {
  const [btnIsHighligted, setIsBtnHighlighted] = useState(false);

  const cartCtxs = useContext(CartContext);
  const { items } = cartCtxs;

  const numberOfCartItems = items.reduce((acc, item) => {
    console.log(item);
    return acc + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighligted ? styles.bump : ""} `;

  useEffect(() => {
    if (cartCtxs.items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={onClickShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
