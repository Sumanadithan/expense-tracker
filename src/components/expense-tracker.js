import React, {useState, useEffect} from 'react';
import Status from './status.js';
import TransactionHistory from './transaction-history.js';
import TransactionForm from './transaction-form.js';
import {Menu} from 'semantic-ui-react';

const ExpenseTracker = () => {
  //state for income,expense,transaction;
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  //saving transaction history in localStorage;
  const saveState = () => {
    localStorage.setItem('expenseTrackerState', JSON.stringify(transactions));
  }
  //calculating the income,expense;
  const calculateExpenses = () => {
    let income = 0,
      expense = 0;

    transactions.forEach((data) => {
      if (data.type === 'income') {
        income += data.amount;
      } else if (data.type === 'expense') {
        expense += data.amount;
      }
    });

    saveState();

    setIncome(income);
    setExpense(expense);
  }
  //function for handling new transaction;
  const handleAddNewTransaction = (item) => {
    let newTransactions = [
      ...transactions,
      item
    ]; //copying old transaction and and adding new transaction;
    setTransactions(newTransactions); //updating the state;
  }
  //function for deleting transaction history;
  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((item) => item.id != id);
    setTransactions(newTransactions);
  }
  //getting data from local storage;
  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
    if (localState) { //updating the state;
      setTransactions(localState);
    } else {
      calculateExpenses();
    }
  }, []);

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  return (<div className='expense-tracker'>
    <Menu style={{
        height: '50px',
        backgroundColor: 'blue',
        color: 'white',
        justifyContent: 'center'
      }}>
      <h1>
        Expense Tracker</h1>
    </Menu >
    <Status income={income} expense={expense}/>
    <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
    <TransactionForm onNewTransaction={handleAddNewTransaction}/>
  </div>)
}

export default ExpenseTracker;
