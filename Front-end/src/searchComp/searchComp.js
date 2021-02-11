import React from "react";
import Localsearch from "./localSearch";
import Serversearch from "./serverSearch";
import Grid from "./grid";

function Searchcomp(props) {
  return (
    <>
      <Serversearch />
      <Localsearch />
      <Grid setShowEmpDetails={props.setShowEmpDetails} />
    </>
  );
}

export default Searchcomp;
