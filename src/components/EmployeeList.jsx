import React from "react";
import AddEmployeeForm from "./AddEmployeeForm";
const EmployeeData = [];
const EmployeeList = () => {
  const addEmployee = (employee) => {
    EmployeeData.push(employee);
    console.log(EmployeeData);
  };
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        gap: "20px",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <AddEmployeeForm EmployeeData={EmployeeData} addEmployee={addEmployee} />
      Employee List
    </div>
  );
};

export default EmployeeList;
