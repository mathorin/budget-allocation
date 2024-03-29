import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location}{totalExpenses}</span>
            <span>Remaining: calculated based on changes to budget or spending</span>
            <span>Spent so far: adjusts with changes in form</span>
        </div>
    );
};

export default BudgetValue;
