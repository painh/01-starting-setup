import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    const saveEpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpenseHandler(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    let cancelHandler = () => {
        setIsEditing(false)
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveEpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;