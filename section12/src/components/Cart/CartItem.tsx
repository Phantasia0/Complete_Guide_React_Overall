import React from "react";
import classes from "./CartItem.module.css";
import { ItemType } from "../../store/cart-context";

interface CartItemProps extends ItemType {
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  price,
  amount,
  name,
  onRemove,
  onAdd,
}) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
