import React from "react";
import type { MealsType } from "../components/Meals/AvailableMeals";
export interface ItemType extends MealsType {
  amount: number;
}

const CartContext = React.createContext({
  items: [] as ItemType[],
  totalAmount: 0,
  addItem: (item: ItemType) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
