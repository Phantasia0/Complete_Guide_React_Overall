import React, { ReactNode } from "react";

import classes from "./Card.module.css";

type CardProps = {
  className: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
