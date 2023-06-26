import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  onShowCart: () => void;
};

const Header: React.FC<HeaderProps> = ({ onShowCart }) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A food image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
