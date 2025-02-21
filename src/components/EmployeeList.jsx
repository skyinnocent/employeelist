import React, { useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import EmployeeItems from "./EmployeeItems";

const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const addEmployee = (employee) => {
    setEmployeeData((prevData) => [...prevData, employee]);
  };

  const removeEmployee = (id) => {
    setEmployeeData((prevData) =>
      prevData.filter((employee) => employee.id !== id)
    );
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
      <AddEmployeeForm employeeData={employeeData} addEmployee={addEmployee} />
      <EmployeeItems
        employeeData={employeeData}
        removeEmployee={removeEmployee}
      />
    </div>
  );
};

export default EmployeeList;
