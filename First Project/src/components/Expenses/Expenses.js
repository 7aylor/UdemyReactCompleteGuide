import React, {useState} from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [selectedFilter, setSelectedFilter] = useState('2021');

  const selectedFilterChangeHandler = (newSelectedFilter) => {
    console.log("in expenses");
    setSelectedFilter(newSelectedFilter);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={selectedFilter} onFilterChanged={selectedFilterChangeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;