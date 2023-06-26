import React, { useContext } from "react";
import type { MealsType } from "../AvailableMeals";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";

type MealItemProps = MealsType;

const MealItem: React.FC<MealItemProps> = ({
  id,
  name,
  description,
  price,
}) => {
  const cartCtx = useContext(cartContext);
  const fixedPrice = `${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      amount: amount,
      id: id,
      name: name,
      description: description,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
