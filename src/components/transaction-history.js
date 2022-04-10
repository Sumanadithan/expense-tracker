import React from 'react';
import {Table, Segment, Grid} from 'semantic-ui-react';

const TransactionHistory = ({transactions, onDeleteTransaction}) => {
  return (<div className='transaction-history'>
    <Segment className='segment'>
      <h1>transaction history</h1>
      <div>
        <Table unstakable="unstakable" className='table'>
          <Table.Header>
            <Segment className='table-seg' style={{
                color: 'green',
                borderColor: 'green',
                textAlign: 'center'
              }}>
              <h3>income</h3>
            </Segment>
          </Table.Header>

          <Table.Body >
            <Table.Row style={{
                textAlign: 'center'
              }}>
              <Table.Cell>
                <div style={{
                    height: '170px',
                    overflow: 'scroll'
                  }}>
                  <ul className='transactions'>
                    {
                      transactions.map((data) => {
                        if (data.type === 'income') {
                          return (<li style={{
                              listStyle: 'none',
                              paddingTop: '5px'
                            }} key={data.id}>
                            <Segment className='li-seg' color='green' horizontal="horizontal" style={{
                                marginLeft: '-25px',
                                height: '50px'
                              }}>
                              <Grid>
                                <Grid.Row>
                                  <Grid.Column floated='left' width={4}>
                                    <h4>{data.name}</h4>
                                  </Grid.Column>
                                  <Grid.Column floated='center' width={4}>
                                    <h4>₹{data.amount}</h4>
                                  </Grid.Column>
                                  <Grid.Column floated='right' width={4}>
                                    <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </Segment>
                          </li>)
                        }
                      })
                    }
                  </ul>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Header>
            <Segment className='table-seg' style={{
                color: 'red',
                borderColor: 'red',
                textAlign: 'center'
              }}>
              <h3>expense</h3>
            </Segment>
          </Table.Header>

          <Table.Body>
            <Table.Row style={{
                textAlign: 'center'
              }}>
              <Table.Cell>
                <div style={{
                    height: '170px',
                    overflow: 'scroll'
                  }}>
                  <ul className='transactions'>
                    {
                      transactions.map((data) => {
                        if (data.type === 'expense') {
                          return (<li style={{
                              listStyle: 'none',
                              paddingTop: '5px'
                            }} key={data.id}>
                            <Segment className='li-seg' color='red' horizontal="horizontal" style={{
                                marginLeft: '-25px',
                                height: '50px'
                              }}>
                              <Grid>
                                <Grid.Row>
                                  <Grid.Column floated='left' width={4}>
                                    <h4>{data.name}</h4>
                                  </Grid.Column>
                                  <Grid.Column floated='center' width={4}>
                                    <h4>₹{data.amount}</h4>
                                  </Grid.Column>
                                  <Grid.Column floated='right' width={4}>
                                    <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </Segment>
                          </li>)
                        }
                      })
                    }
                  </ul>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Segment>
  </div>)
}

export default TransactionHistory;
