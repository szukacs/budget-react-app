import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.expenses;
    

    const selectFilterYear = (filterYear) => {
        setFilteredYear(filterYear)
        console.log(filterYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onDateFilter={selectFilterYear}/>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
            </Card>
        </div>
    );

}

export default Expenses;