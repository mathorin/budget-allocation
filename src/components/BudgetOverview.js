import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import LocationForm from "../components/Location.js";

const BudgetOverview = () => {
  const { expense, budget, Location, dispatch } = useContext(AppContext);

  const totalExpenses = expense
    .map((obj) => obj.budgetAlloc)
    .reduce((acc, cv) => acc + cv, 0);

  const setBudget = (value) => {
    dispatch({
      type: "UPDATE_BUDGET",
      payload: value,
    });
  };

  return (
    <div className="row">
      <span className="alert alert-secondary budget col-md-3">
        Budget: {Location + " "}
        <input
          value={budget}
          type="number"
          step="10"
          max={20000}
          min={0}
          onChange={(e) => {
            if (e.target.value >= e.target.max) {
              alert("Reached max of: " + e.target.max);
            }

            if (e.target.value >= totalExpenses) {
              setBudget(e.target.value);
            } else {
              alert(
                "Expenses cannot exceed budget, increase budget or reduce allocated amounts"
              );
            }
          }}
        ></input>
      </span>

      <span className="alert alert-success remaining col-md-3">
        Remaining: {Location} {budget - totalExpenses}
      </span>

      <span className="alert alert-primary spent col-md-3">
        Spent so far: {Location} {totalExpenses}
      </span>

      <span className="alert alert-success col-md-2">
        <LocationForm></LocationForm>
      </span>
    </div>
  );
};

export default BudgetOverview;
