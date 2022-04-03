import React, { useState } from 'react';
import { uniqueId } from '../utils';
import {Form,Button} from 'semantic-ui-react';


const TransactionForm = ({ onNewTransaction }) =>{
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

    return (
        <div style={{marginTop:'-350px'}}>
            <h2 style={{marginLeft:'50px'}}>Add New Transactions</h2>
            <Form style={{width:'450px',marginLeft:'20px'}}className='transaction-form'>
            <Form.Field>
                <label>
                    Name
                    </label>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </Form.Field>
                <Form.Field>
                <label>
                    Amount
                    </label>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)} />
                    </Form.Field>
                    <Button className='income-btn' onClick={(e) => addTransaction('income', e)}>Add Income</Button>
                    <Button className='expense-btn' onClick={(e) => addTransaction('expense', e)}>Add Expense</Button>
            </Form>
        </div>
    )
}

export default TransactionForm;
