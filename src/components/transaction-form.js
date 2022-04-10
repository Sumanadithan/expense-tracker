import React, {useState} from 'react';
import {uniqueId} from '../utils';
import {Form, Button, Segment} from 'semantic-ui-react';

const TransactionForm = ({onNewTransaction}) => {
  //state for name,amount;
  const [nameValue, setNameValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  //function for assigning input data to data object;
  const addTransaction = (type, evt) => {
    //preventing form submit reload;
    evt.preventDefault();
    //checking input value not equal to null;
    if (nameValue !== '' && amountValue !== '') {
      //assigning values to data object;
      const data = {
        id: uniqueId(),
        name: nameValue,
        amount: parseInt(amountValue),
        type: type
      };
      //passing data object to parent component;
      onNewTransaction(data);
    } else { //if input value is null;
      alert('please enter valid data');
    }
    //assigning name,amount is null;
    setNameValue('');
    setAmountValue('');
  }

  return (<div className='transaction-form'>
    <Segment className='segment'>
      <h2 >Add New Transactions</h2>
      <Form >
        <Form.Field>
          <label>
            <h4>
              Name
            </h4>
          </label>
          <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>
            <h4>
              Amount
            </h4>
          </label>
          <input type="number" value={amountValue} onChange={(e) => setAmountValue(e.target.value)}/>
        </Form.Field>
        <Button className='income-btn' basic="basic" color='green' onClick={(e) => addTransaction('income', e)}>Add Income</Button>
        <Button className='expense-btn' basic="basic" color='red' onClick={(e) => addTransaction('expense', e)}>Add Expense</Button>
      </Form>
    </Segment>
  </div>)
}

export default TransactionForm;
