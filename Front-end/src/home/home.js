import React, { useState, useEffect } from "react";
import Empdetails from "../empDetails/empDetails";
import Searchcomp from "../searchComp/searchComp";
import Header from "./header";
import { useSelector } from "react-redux";
import "./style/home.scss";

function Home(props) {
  const [showEmpDetails, setShowEmpDetails] = useState(false);
  const [empDetail, setEmpDetail] = useState({});
  const userName = useSelector((state) => state.loginComp.userDetails);
  const goBack = () => {
    setShowEmpDetails(false);
  };
  const setEmpDetails = (cell) => {
    setShowEmpDetails(true);
    setEmpDetail({
      firstName: cell.data.first_Name,
      middleName: cell.data.middle_Name,
      salary: cell.data.salary,
      lastName: cell.data.last_Name,
      empType: cell.data.emp_Type,
    });
  };
  return (
    <div className="home-container">
      <div className="home">
        <Header title="Employee Management" user={userName} />
        {showEmpDetails ? (
          <Empdetails empDetails={empDetail} goBack={goBack} />
        ) : (
          <Searchcomp setShowEmpDetails={setEmpDetails} />
        )}
      </div>
    </div>
  );
}

export default Home;
