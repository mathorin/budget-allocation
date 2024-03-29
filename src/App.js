import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/DepartmentSelected';
import Location from './components/Location';

function App() {
  return (
      <AppProvider>
          <div className="Container">
            <h1>Company's Budget Allocation</h1>
            <Budget />
            <CartValue />
            <ExpenseList />
            <ItemSelected />
            <Location />
        </div>
      </AppProvider>
  );
}

export default App;
