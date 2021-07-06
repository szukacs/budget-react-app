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

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (

        <div>
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onDateFilter={selectFilterYear}
            />
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />
            ))
        }
        </Card>
    </div>
/*        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onDateFilter={selectFilterYear}
                />
            {filteredExpenses.length === 0 ? (
               <p>No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))
            )}
            </Card>
        </div>*/
    );

}

export default Expenses;