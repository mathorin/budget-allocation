import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import BudgetOverview from "./components/BudgetOverview";
import BudgetList from "./components/BudgetList";
import DepartmentSelected from "./components/DepartmentSelected";
// import Location from "./components/Location";

function App() {
  return (
    <AppProvider>
      <div className="Container">
        <h1>Company's Budget Allocation</h1>
        <BudgetOverview />
        <BudgetList />
        <DepartmentSelected />
      </div>
    </AppProvider>
  );
}

export default App;
