import React, { useContext } from 'react';
import BudgetItem from './BudgetItem';
import { AppContext } from '../context/AppContext';

const BudgetList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <>
        <h3>Allocation</h3>
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <BudgetItem id={expense.id} key={expense.id} name={expense.name} budgetAlloc={expense.budgetAlloc} unitprice={expense.unitprice} />
            ))}
            </tbody>
        </table>
        </>
    );
};

export default BudgetList;
