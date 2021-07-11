import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.expenses;
    

    const selectFilterYear = (filterYear) => {
        setFilteredYear(filterYear)
        console.log(filterYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });


    return (
    <li>
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onDateFilter={selectFilterYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    </li>
    );

}

export default Expenses;