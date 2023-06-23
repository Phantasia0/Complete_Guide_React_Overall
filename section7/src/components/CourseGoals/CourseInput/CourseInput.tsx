import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
// import styled from 'styled-components';
import styles from './CourseInput.module.css';

// interface FormControlProps {
//   readonly invalid : true | false
// }
//
// const FormControl = styled.div<FormControlProps>`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;


type CourseInputType = {
  onAddGoal:(param:string)=>void;
}

const CourseInput:React.FC<CourseInputType> = ({onAddGoal}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid! && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
