import CartIcon from "../Cart/Cart-icon";
import styles from "./Header-cart-btn.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = ({ onClickShowCart }) => {
  
  const cartCtxs = useContext(CartContext);
  const numberOfCartItems = cartCtxs.items.reduce((acc, item) => {
    console.log(item);
    return acc + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={onClickShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
