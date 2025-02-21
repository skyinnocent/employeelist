import React from "react";

const EmployeeItems = ({ employeeData, removeEmployee }) => {
  return (
    <div>
      {employeeData.map((employee) => {
        return (
          <div key={employee.id}>
            <div>{employee.name}</div>
            <div>{employee.id}</div>
            <div>{employee.salary}</div>
            <div>{employee.email}</div>
            <button onClick={() => removeEmployee(employee.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeItems;
