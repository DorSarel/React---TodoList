import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <h2>ToDo List App</h2>
      <span>Active tasks: {props.activeTasks}</span>
    </header>
  );
}

Header.PropTypes = {
  activeTasks: PropTypes.number
}

export default Header;
