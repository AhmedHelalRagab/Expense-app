
import './App.css';
import ExpenseItem from './Expenses/ExpenseItem';
import NewExpense from './NewExpense/NewExpense';
import ExpensesFilter from './Expenses/ExpensesFilter'
import {useState} from 'react'
const initialExpenses=[
  {
    id:'e1',
    Title:'Car Insurance',
    Price:'222.5',
    Date:new Date(2022,4,24)
  },
  {
    id:'e2',
    Title:'Toilet Paper',
    Price:'22',
    Date:new Date(2021,4,24)
  },
  {
    id:'e3',
    Title:'TV',
    Price:'1213',
    Date:new Date(2020,4,24)
  }
]
const App=() =>{
  const [selectedFilter,setFilter]=useState('2020')
  const [expenses,setExpenseData]=useState(initialExpenses)
 
  const handlerExpense = expense => {
    setExpenseData( prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  
  const onChangeFilter=filter=>{
      setFilter(filter);
  }
  const filteredYear=expenses.filter(expense=>{
    console.log(expense.Date.getFullYear())
    console.log(selectedFilter)
  return  expense.Date.getFullYear()==selectedFilter;
  }
  );


  return (
    <div >
      
      <NewExpense addExpense={handlerExpense} />
      <ExpensesFilter onSelected={selectedFilter} onHandlerFilter={onChangeFilter} />
      {
        filteredYear.length>0?(filteredYear.map((expense,index)=><ExpenseItem   date={expense.Date} title={expense.Title} price={expense.Price} key={expense.id} />))
        :<p>No Data Found Here</p>
      }

    </div>
  );
}

export default App;
