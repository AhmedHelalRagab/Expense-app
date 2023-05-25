
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import {useState} from 'react'
const NewExpense=(props)=>{

  const AddingExpense= data=>{
  const expense={
    id:Math.random().toString(),
    ...data
  }
  props.addExpense(expense)
  console.log(expense);

  };
  const [isShowing,setIsShowing]=useState(false);
  const handelShowingExpense=()=>setIsShowing(true);
  const deletingShowingExpense=()=>setIsShowing(false);
  return (
    <div>


    {isShowing?
      <div className='new-expense'>
    <ExpenseForm onSave = {AddingExpense} onCancel={deletingShowingExpense}>

    </ExpenseForm>
</div>:
<div className='addingnewExpense'>
  
  <button onClick={handelShowingExpense} className='newExpenseButton'>New Expense</button>
</div>}

  </div>
  );
};

export default NewExpense;