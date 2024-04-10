import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const BudgetItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.department,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleAddTen = () => {
        const item = {
            name: props.name,
        }
        dispatch({
            type: 'ADD_ALLOC',
            payload: props,
        })
    }





    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.budgetAlloc}</td>
        <td>{<button onClick={handleAddTen}>+10</button>}</td>
        <td>{props.budgetAlloc - 10}</td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default BudgetItem;
