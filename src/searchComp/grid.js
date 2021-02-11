import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Grid(props) {
  const [empData, setEmpData] = useState([]);
  const dispatch = useDispatch();

  let rowData = useSelector((state) => state?.searchComp?.employeeData);
  const localSearchKey = useSelector(
    (state) => state?.searchComp?.localSearchKey
  );
  useEffect(() => {
    dispatch({ type: "updateEmpData", payload: "" });
  }, []);
  useEffect(() => {
    if (rowData) {
      const filteredData = rowData.filter((emp) => {
        return (
          emp.first_Name.includes(localSearchKey) ||
          emp.last_Name.includes(localSearchKey)
        );
      });
      setEmpData(filteredData);
    }
  }, [localSearchKey]);

  useEffect(() => {
    setEmpData(rowData);
  }, [rowData]);
  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact  rowData={empData}>
        <AgGridColumn headerName="First Name" field="first_Name"></AgGridColumn>
        <AgGridColumn
          headerName="Middle Name"
          field="middle_Name"
        ></AgGridColumn>
        <AgGridColumn headerName="Last Name" field="last_Name"></AgGridColumn>
        <AgGridColumn
          headerName="Details"
          field="details"
          type="button"
          onCellClicked={(cell) => props.setShowEmpDetails(cell)}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

export default Grid;
