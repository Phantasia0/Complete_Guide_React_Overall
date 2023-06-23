import React from 'react';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import {CourseGoalType} from '../../../App';
import './CourseGoalList.css';

type CourseGoalListType = {
  items:CourseGoalType[];
  onDeleteItem:(goalId:string)=>void;
}

const CourseGoalList:React.FC<CourseGoalListType> = ({items, onDeleteItem}) => {
  return (
    <ul className="goal-list">
      {items.map((goal:CourseGoalType) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
