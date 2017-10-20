import React from "react";
import PropTypes from "prop-types";

const InProgressList = (props) => {
    return (
      <div className="list-container-child">
        <h3>In Progress:</h3>
        <ul>
        <li className="todo-list-item">
          <span> 1 </span>

          <button>In Progress</button>
          <button>Remove</button>
        </li>
        </ul>
      </div>
    );
}

InProgressList.PropTypes = {

}

export default InProgressList;
