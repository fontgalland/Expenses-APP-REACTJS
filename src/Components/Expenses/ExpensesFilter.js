import './ExpensesFilter.css';
import { useState } from 'react';

const ExpensesFilter = (props) => {
    const [yearSelected, setYearSelected] = useState('');

    const dropdrownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={dropdrownChangeHandler}>
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