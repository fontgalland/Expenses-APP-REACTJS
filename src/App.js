import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id: 0, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 29)},
  {id: 1, title: 'Car Insurance', amount: 144.67, date: new Date(2022, 2, 29)},
  {id: 2, title: 'Car Insurance', amount: 214.67, date: new Date(2021, 2, 29)}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
