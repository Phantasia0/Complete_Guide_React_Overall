import React from 'react';
import './CourseGoalItem.css';

type CourseGoalItemType = {
  id:string;
  onDelete:(goalId:string)=>void;
  children:React.ReactNode;
}

const CourseGoalItem:React.FC<CourseGoalItemType> = ({id, onDelete, children}) => {

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
