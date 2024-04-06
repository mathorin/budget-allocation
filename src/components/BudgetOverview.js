import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetOverview = () => {
    // removed budget from here, will want to add back and use useContext
    const { expenses, Location, budgety } = useContext(AppContext);
    
    // const totalExpenses = expenses.reduce((total, item) => {
    // return (total += (item.unitprice * item.quantity));
    // }, 0);

    const [budget, setBudget] = useState('0');

    return (
        <div className='alert alert-primary'>
            <p>
                <span>Budget:{Location}
                    <input 
                        placeholder='Enter your budget' 
                        type='number'
                        step='10' 
                        max={20000}
                        min={0}
                        onChange={e => setBudget(e.target.value)}
                        >
                    </input>
                </span>
            </p>
            {/* <span>Budget: {Location}{totalBudget}</span> */}
            {/* <p>Budget: {budget}</p> */}
            <p>Expenses: {expenses}</p>
            <p></p>
            <p><span>Remaining: calculated based on changes to budget or spending {budget - expenses}</span></p>
            <p><span>Spent so far(Allocated expenses):{expenses} adjusts with changes in form</span></p>
        </div>
    );
};

export default BudgetOverview;
