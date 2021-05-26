import Modal from "../UI/Modal/Modal.component";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./Cart-item";
import { useContext } from "react";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAaddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAaddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClickHide={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems ? <button className={styles.button}>Order</button> : null}
      </div>
    </Modal>
  );
};

export default Cart;
