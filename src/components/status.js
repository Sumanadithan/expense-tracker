import React from 'react';
import {Grid,Container} from 'semantic-ui-react';

const Status = ({ income, expense }) => {
    return (
        <Container>
        <Grid column={2} divided>
        <Grid.Row>
                <Grid.Column width={2}>
                    <span>
                        <h3 >Income</h3>
                        <div >${income}</div>
                    </span>
                </Grid.Column>
                <Grid.Column width={2}>
                    <h3>Expense</h3>
                    <div className='expense-text'>${expense}</div>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <h2>Your Balance</h2>
                </Grid.Row>
                <Grid.Row>
                <div class='column'>${income - expense}</div>
                </Grid.Row>
                </Grid>
        </Container>
    )
}

export default Status;
