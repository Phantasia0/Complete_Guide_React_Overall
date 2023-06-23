import React, { useState } from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

type UserInputProps = {
  onCalculate: (param: typeof initialUserInput) => void;
};

const UserInput: React.FC<UserInputProps> = ({ onCalculate }) => {
  const [userInput, setUserInput] =
    useState<typeof initialUserInput>(initialUserInput);
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input: string, value: string | number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [input]: +value,
    }));
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
