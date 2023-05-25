import './ExpenseItem.css'
import React,{ useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem=(props)=>{
//  const [title,setTitle]= useState(props.title);

//   const clickHandler=()=>{
//     setTitle('updated');
//   }
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.date} />   
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  )
  
}

export default ExpenseItem