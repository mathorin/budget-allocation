import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetOverview = () => {
    const { expense, Location, budget, dispatch } = useContext(AppContext);
    
    const totalExpenses = expense.map((obj) => obj.budgetAlloc).reduce((acc, cv) => acc + cv, 0)

    const handleClick = () => {
        alert('Budget is '+ budget + ' dollars')

    }

    const setBudget = (e) => {
        // console.log(e)
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: e,
        });
        // console.log('Budget after setBudget runs is showing as ' + budget)
    }

    // const [budget, setBudget] = useState('0');

    return (
        <div className='alert alert-primary'>
            <p>
                <span>Budget: {Location + ' '}
                    <input 
                        placeholder={budget} 
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


            <p>Expenses: {Location} {totalExpenses}</p>
            <p></p>
            <p><span>Remaining: {Location} {budget - totalExpenses}</span></p>
            <button onClick={handleClick}>test</button>
            {/* <p><span>Spent so far(Allocated expenses):{expense} adjusts with changes in form</span></p> */}
        </div>
    );
};

export default BudgetOverview;
