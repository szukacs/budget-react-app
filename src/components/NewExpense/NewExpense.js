import './NewExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const saveExpenseDataHendler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const toggleExpenseButton = () => {
        setIsFormOpen(true);
    };

    const openFormBoolean = (openForm) => {
        setIsFormOpen(openForm);
    };

    return (
    <div className="new-expense">
        {!isFormOpen && <button onClick={toggleExpenseButton}>Add New Expense</button>}
        {isFormOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHendler} onOpenForm={openFormBoolean}/>}

    </div>
    );
};

export default NewExpense;