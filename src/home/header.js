import React from "react";
import "./style/header.scss";

function Header(props) {
  return (
    <div className="header">
      <h6>{props.title}</h6>
      <h6>{props.user}</h6>
    </div>
  );
}

export default Header;
