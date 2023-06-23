import React from "react";
import "./ExpensesFilter.css";

type ExpensesFilterProps = {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
};

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
  selected,
  onChangeFilter,
}) => {
  const dropdownHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select value={selected} onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
