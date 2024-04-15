import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_LOCATION",
      payload: val,
    });
  };

  return (
    // <span className="alert alert-success location col-md-2">
    <span>
      {" "}
      Currency{" "}
      {
        <select
          name="Location"
          id="Location"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option value="$">US($)</option>
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>
      }
    </span>
  );
};

export default Location;
