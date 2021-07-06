import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  //const [enteredFilterDate, setEnteredFilterDate] = useState('');

  const filterDateChangeHandler = (event) => {
    //event.preventDefault();
    //setEnteredFilterDate(event.target.value);
    props.onDateFilter(event.target.value);
    //console.log(event.target.value);
    //console.log(enteredFilterDate);
  };

  return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={filterDateChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
  );
};

export default ExpensesFilter;