import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    
    const [enteredTitle,setTitle]=useState('');
    const handleTilte=(event)=>{
      setTitle(event.target.value);
    }
    const [enteredAmount,setAmount]=useState('');
    const handleAmount=(event)=>{
      setAmount(event.target.value);
    }
    const [enteredDate,setDate]=useState('');
    const handleDate=(event)=>{
      setDate(event.target.value);
    }
    const submitForm=event=>{

      event.preventDefault();

      const expenseValues={
        Title:enteredTitle,
        Price:enteredAmount,
        Date:new Date(enteredDate),
      }
      props.onSave(expenseValues);
      console.log(expenseValues);

      setTitle('');
      setAmount('');
      setDate('');
    }
    
    return <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="t">Title</label>
          <input type="text" id="t" value={enteredTitle} onChange={handleTilte} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="n">Amount</label>
          <input type="number" id="n" min='0.01' onChange={handleAmount} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="d">Date</label>
          <input type="date" id="d" value={enteredDate} onChange={handleDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
      {<button onClick={props.onCancel} className="cancelButton">Cancel</button>}
        <button type='submit'>Add Expense</button>
      
      </div>
      {props.children}
    </form>
}

export default ExpenseForm;