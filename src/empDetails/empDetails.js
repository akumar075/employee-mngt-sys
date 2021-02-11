import React from "react";
import "./empDetails.scss";

export default function Empdetails(props) {
  return (
    <div className="emp-details">
      <span className="row">
        <h5>First Name : </h5>
        <h5>{props.empDetails.firstName}</h5>
      </span>
      <span className="row">
        <h5>Middle Name : </h5>
        <h5>{props.empDetails.middleName}</h5>
      </span>
      <span className="row">
        <h5>Last Name : </h5>
        <h5>{props.empDetails.lastName}</h5>
      </span>
      <span className="row">
        <h5>Salary : </h5>
        <h5>{props.empDetails.salary}</h5>
      </span>
      <span className="row">
        <h5>Employment Type : </h5>
        <h5>{props.empDetails.empType}</h5>
      </span>
      <div className="button">
        <button onClick={()=>{props.goBack()}}>Go Back</button>
      </div>
    </div>
  );
}
