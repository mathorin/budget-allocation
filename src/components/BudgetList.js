import React, { useContext } from "react";
import BudgetItem from "./BudgetItem";
import { AppContext } from "../context/AppContext";

const BudgetList = () => {
  const { expense } = useContext(AppContext);

  return (
    <>
      <h3 className="budgetlist">Allocation</h3>
      <table className="table">
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
          {expense.map((exp) => (
            <BudgetItem
              id={exp.id}
              key={exp.id}
              name={exp.name}
              budgetAlloc={exp.budgetAlloc}
              unitprice={exp.unitprice}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BudgetList;
