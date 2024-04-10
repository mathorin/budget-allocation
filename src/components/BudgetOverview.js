import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetOverview = () => {
    // removed budget from here, will want to add back and use useContext
    const { expense, Location, budget } = useContext(AppContext);
    
    const totalExpenses = expense.map((obj) => obj.budgetAlloc).reduce((acc, cv) => acc + cv, 0)

    const handleClick = () => {
        alert('Budget is '+ budget + ' dollars')

    }

    // const [budget, setBudget] = useState('0');

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
                        // onChange={e => 'setBudget(e.target.value)}
                        >
                    </input>
                </span>
            </p>
            {/* <span>Budget: {Location}{totalBudget}</span> */}
            {/* <p>Budget: {budget}</p> */}


            <p>Expenses: {totalExpenses}</p>
            <p></p>
            <p><span>Remaining: calculated based on changes to budget or spending {budget - totalExpenses}</span></p>
            <button onClick={handleClick}>test</button>
            {/* <p><span>Spent so far(Allocated expenses):{expense} adjusts with changes in form</span></p> */}
        </div>
    );
};

export default BudgetOverview;
