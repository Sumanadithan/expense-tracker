import React from 'react';
import {Table} from 'semantic-ui-react';
import {Media,MediaContextProvider} from './Medias.js';

const TransactionHistory = ({transactions, onDeleteTransaction}) => {
  return (
    <MediaContextProvider>
    <div style={{marginTop: mobile ? '0px' : '-170px'}}>
    <div style={{display:'flex',justifyContent:'right',marginRight:'40px'}}>

    <Table unstakable style={{width:'500px'}}>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell colspan='3'>
          transaction history
        </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell colspan='3'>
            income
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <div style={{
                height: '200px',
                overflow: 'scroll'
              }}>
              <ul className='transactions'>
                {
                  transactions.map((data) => {
                    if (data.type === 'income') {
                      return (<li key={data.id}>
                        <div>{data.name}</div>
                        <div>
                          <span>${data.amount}</span>
                          <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                        </div>
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
        <Table.Row>
          <Table.HeaderCell colspan='3'>
            income
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <div style={{
                height: '200px',
                overflow: 'scroll'
              }}>
              <ul className='transactions'>
                {
                  transactions.map((data) => {
                    if (data.type === 'expense') {
                      return (<li key={data.id}>
                        <div>{data.name}</div>
                        <div>
                          <span>${data.amount}</span>
                          <button onClick={() => onDeleteTransaction(data.id)}>x</button>
                        </div>
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
    </div>
    </MediaContextProvider>
  )
}

export default TransactionHistory;


// import React from 'react';
// import {Table} from 'semantic-ui-react';
//
// const TransactionHistory = ({transactions, onDeleteTransaction}) => {
//   return (
//     <div >
//     <h1 style={{margin:'0px 50px'}}>transaction history</h1>
//     <div style={{display:'flex',alignItems:'right'}}>
//     <Table unstakable style={{width:'500px'}}>
//       <Table.Header>
//         <Table.Row>
//           <Table.HeaderCell colspan='3'>
//             income
//           </Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>
//
//       <Table.Body>
//         <Table.Row>
//           <Table.Cell>
//             <div style={{
//                 height: '200px',
//                 overflow: 'scroll'
//               }}>
//               <ul className='transactions'>
//                 {
//                   transactions.map((data) => {
//                     if (data.type === 'income') {
//                       return (<li key={data.id}>
//                         <div>{data.name}</div>
//                         <div>
//                           <span>${data.amount}</span>
//                           <button onClick={() => onDeleteTransaction(data.id)}>x</button>
//                         </div>
//                       </li>)
//                     }
//                   })
//                 }
//               </ul>
//             </div>
//           </Table.Cell>
//         </Table.Row>
//       </Table.Body>
//     </Table>
//
//     <Table unstakable style={{width:'500px'}}>
//       <Table.Header>
//         <Table.Row>
//           <Table.HeaderCell colspan='3'>
//             income
//           </Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>
//
//       <Table.Body>
//         <Table.Row>
//           <Table.Cell>
//             <div style={{
//                 height: '200px',
//                 overflow: 'scroll'
//               }}>
//               <ul className='transactions'>
//                 {
//                   transactions.map((data) => {
//                     if (data.type === 'expense') {
//                       return (<li key={data.id}>
//                         <div>{data.name}</div>
//                         <div>
//                           <span>${data.amount}</span>
//                           <button onClick={() => onDeleteTransaction(data.id)}>x</button>
//                         </div>
//                       </li>)
//                     }
//                   })
//                 }
//               </ul>
//             </div>
//           </Table.Cell>
//         </Table.Row>
//       </Table.Body>
//     </Table>
//     </div>
//     </div>
//   )
// }
//
// export default TransactionHistory;
