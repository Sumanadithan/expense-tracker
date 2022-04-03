import React from 'react';
import { uniqueId } from './utils';

const Eapp =()=>{

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  const addTransaction = (type, evt) => {
      evt.preventDefault();

      const data = { id: uniqueId(), name: nameValue,
              amount: parseInt(amountValue), type: type };

      onNewTransaction(data);

      setNameValue('');
      setAmountValue('');
  }

  const saveState = () => {
      localStorage.setItem('expenseTrackerState',
          JSON.stringify(transactions));
  }

  const calculateExpenses = () => {
      let income = 0, expense = 0;

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

  const handleAddNewTransaction = item => {
      let newTransactions = [...transactions, item];
      setTransactions(newTransactions);
  }

  const handleDeleteTransaction = id => {
      const newTransactions = transactions.filter((item) => item.id != id);
      setTransactions(newTransactions);
  }

  useEffect(() => {
      let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
      if (localState) {
          setTransactions(localState);
      } else {
          calculateExpenses();
      }
  }, []);

  useEffect(() => {
      calculateExpenses();
  }, [transactions]);


  return(
    <div>

    <h1>Expense Tracker</h1>

    <h2>Your Balance</h2>
    <div className='balance-val'>${income - expense}</div>
    <div className='row row-expense'>
        <div className='col col-income'>
            <span>
                <h3>Income</h3>
                <div className='income-text'>${income}</div>
            </span>
        </div>
        <div className='col col-expense'>
            <h3>Expense</h3>
            <div className='expense-text'>${expense}</div>
        </div>
    </div>

    <div>
        <h2>Transaction History</h2>
        <ul className='transactions'>
            {
                transactions.map((data) =>
                    <li key={data.id}>
                        <div>{data.name}</div>
                        <div>
                            <span>${data.amount}</span>
                            <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>

    <div>
        <h2>Add New Transactions</h2>
        <form className='transaction-form'>
            <label>
                Name
                <div>
                    <input type="text" value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)} />
                </div>
            </label>
            <label>
                Amount
                <div>
                    <input type="number" value={amountValue}
                        onChange={(e) => setAmountValue(e.target.value)} />
                </div>
            </label>
            <div>
                <button className='income-btn' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                <button className='expense-btn' onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
            </div>
        </form>
    </div>

    </div>
  )
}
export default Eapp;
