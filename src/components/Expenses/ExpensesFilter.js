import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
// eslint-disable-next-line
    const [_, setFilteredYear] = useState("2020") // [state, function
    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value)
        props.onFilterChange(event.target.value)
        // console.log(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;