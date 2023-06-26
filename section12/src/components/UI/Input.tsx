import React from "react";
import classes from "./Input.module.css";

type InputProps = any;

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
