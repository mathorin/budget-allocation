import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetOverview = () => {
    const { budget, expenses, Location, budgety } = useContext(AppContext);
    
    // const totalExpenses = expenses.reduce((total, item) => {
    // return (total += (item.unitprice * item.quantity));
    // }, 0);

    return (
        <div className='alert alert-primary'>
            {/* <span>Budget: {Location}{totalBudget} My budget: {budget}</span> */}
            <p>
                <span>Budget:{Location}
                    <input 
                        placeholder='Enter your budget' 
                        type='number'
                        step='10' 
                        max={20000}
                        min={0}
                        >
                    </input>
                </span>
            </p>
            {/* <span>Budget: {Location}{totalBudget}</span> */}
            <p><span>Budgety: {budgety - 100}</span></p>
            <p>Budget: {budget}</p>
            <p>Expenses: {expenses}</p>
            <p></p>
            <p><span>Remaining: calculated based on changes to budget or spending {budget - expenses}</span></p>
            <p><span>Spent so far(Allocated): adjusts with changes in form</span></p>
        </div>
    );
};

export default BudgetOverview;
