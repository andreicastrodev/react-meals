import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return DEFAULT_STATE;
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, DEFAULT_STATE);

  const addItemToHandler = (item) => {
    cartDispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
