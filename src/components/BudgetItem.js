import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const BudgetItem = (props) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  const handleAddTen = () => {
    const department = {
      name: props.name,
      amount: 10,
    };
    dispatch({
      type: "ADD_ALLOC",
      payload: department,
    });
  };

  const handleReduceTen = () => {
    const department = {
      name: props.name,
      amount: 10,
    };
    dispatch({
      type: "RED_ALLOC",
      payload: department,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {Location} {props.budgetAlloc}
      </td>
      <td>
        {
          <FaPlusCircle
            size="2.2em"
            color="green"
            onClick={handleAddTen}
          ></FaPlusCircle>
        }
      </td>
      <td>
        {
          <FaMinusCircle
            size="2.2em"
            color="maroon"
            onClick={handleReduceTen}
          ></FaMinusCircle>
        }
      </td>
      <td>
        <FaTimesCircle
          size="1.1em"
          color="black"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default BudgetItem;
