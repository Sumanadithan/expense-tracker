import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';

const Status = ({income, expense}) => {
  return (<div className='status'>
    <Segment className='segment'>
      <Grid>
        <Grid.Row>
          <Grid.Column >
            <Segment className='income' color='green' style={{
                borderColor: 'green',
                textAlign: 'center'
              }}>
              <Grid.Row>
                <h3>Income</h3>
              </Grid.Row>
              <Grid.Row style={{
                  paddingTop: '4px'
                }}>
                <h4>₹{income}</h4>
              </Grid.Row>
            </Segment>

          </Grid.Column>
          <Grid.Column>
            <Segment className='expense' color='red' style={{
                borderColor: 'red',
                textAlign: 'center'
              }}>
              <Grid.Row>
                <h3>Expense</h3>
              </Grid.Row>
              <Grid.Row style={{
                  paddingTop: '4px'
                }}>
                <h4>₹{expense}</h4>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Segment className='balance' color='orange' style={{
            borderColor: 'orange',
            textAlign: 'center'
          }}>
          <Grid.Row>
            <h2>Your Balance</h2>
          </Grid.Row>
          <Grid.Row style={{
              paddingTop: '4px'
            }}>
            <h4>₹{income - expense}</h4>
          </Grid.Row>
        </Segment>
      </Grid>
    </Segment>
  </div>)
}

export default Status;
