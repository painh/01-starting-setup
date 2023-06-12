import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(selectedYear)
        console.log('filterChangeHandler')
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;