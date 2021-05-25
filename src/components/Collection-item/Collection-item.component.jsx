import React, { useRef, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Collection-item.module.css";

const CollectionItem = ({ title, price, description, id }) => {
  const [setAmountIsValid] = useState(false);

  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const addToCardHanadler = (amount) => {
    console.log(amount);
    cartCtx.addItem({
      id: id,
      name: title,
      amount: amount,
      price: price,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(`sumitted`);
    console.log(enteredAmountNumber);
    addToCardHanadler(enteredAmountNumber);
  };

  return (
    <form className={styles.CollectionItem} onSubmit={submitHandler}>
      <div className={styles.CollectionItem_title}>
        <h2 className={styles.CollectionItem_name}>{title}</h2>
        <div className={styles.CollectionItem_input}>
          <h2>Amount</h2>
          <input
            id="amount"
            ref={amountInputRef}
            className={styles.CollectionItem_inputAmount}
            min="1"
            max="5"
            step="1"
            type="number"
            defaultValue="1 "
          />
        </div>
      </div>
      <div className={styles.CollectionItem_description}>
        <p className={styles.CollectionItem_desc}>{description}</p>
        <button className={styles.CollectionItem__button}>Add</button>
      </div>
      <div className={styles.CollectionItem_price}>
        <h2 className={styles.CollectionItem__tag}>${price.toFixed(2)}</h2>
      </div>
    </form>
  );
};

export default CollectionItem;
