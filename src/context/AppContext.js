import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_expenses = [];
  switch (action.type) {
    case "UPDATE_BUDGET":
      state.budget = action.payload;
      action.type = "DONE";
      return {
        ...state,
      };

    case "ADD_ALLOC":
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.budgetAlloc = expense.budgetAlloc + action.payload.amount;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };

    case "RED_ALLOC":
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.budgetAlloc = expense.budgetAlloc - action.payload.amount;
        }
        expense.budgetAlloc = expense.budgetAlloc < 0 ? 0 : expense.budgetAlloc;
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };
    case "DELETE_ITEM":
      state.expenses.map((expense) => {
        console.log(
          `Expense.name is ${expense.name} and action.payload.name is ${action.payload.name}`
        );
        if (expense.name === action.payload.name) {
          console.log("Delete_item if statement ran in appContext");
          expense.budgetAlloc = 0;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };
    case "CHG_LOCATION":
      action.type = "DONE";
      state.Location = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  expenses: [
    { id: "Marketing", name: "Marketing", budgetAlloc: 40 },
    { id: "Finance", name: "Finance", budgetAlloc: 20 },
    { id: "Sales", name: "Sales", budgetAlloc: 30 },
    { id: "Human Resources", name: "Human Resources", budgetAlloc: 40 },
    { id: "IT", name: "IT", budgetAlloc: 50 },
  ],
  Location: "$",
  budget: 200,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.unitprice * item.quantity);
  }, 0);
  state.BudgetScenario = totalExpenses;

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expense: state.expenses.map((obj) => obj),
        // expenses: state.expenses.map((obj) => obj.budgetAlloc).reduce((acc, cv) => acc + cv, 0),
        // expenses: state.expenses,
        // budget: state.budget,
        dispatch,
        Location: state.Location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
