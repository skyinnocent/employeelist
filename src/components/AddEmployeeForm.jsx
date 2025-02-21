import React, { useState } from "react";
let style = {
  gap: "20px",
  display: "flex",
  flexDirection: "column",
};

const AddEmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({ name: "", email: "", salary: "" });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    salary: "",
  });
  const validate = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required ...." : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Enter valid Email" : "";
      case "salary":
        return value < 15000 ? "Salary must be more than 15000" : "";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // First checking error then setting things:
    const newEmployee = { ...employee, id: Date.now() };
    addEmployee(newEmployee);
    setEmployee({ name: "", email: "", salary: "" });
  };

  const handleChange = (e) => {
    const errorMessage = validate(e.target.name, e.target.value);
    setValidationErrors((prevError) => ({
      ...prevError,
      [e.target.name]: errorMessage,
    }));
    setEmployee((previousEmployee) => ({
      ...previousEmployee,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form style={style} onSubmit={(e) => handleSubmit(e)}>
        <p>ADD EMPLOYEE</p>
        <input
          placeholder="Name"
          type="text"
          value={employee.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        {validationErrors.name && (
          <p style={{ color: "red" }}>{validationErrors.name}</p>
        )}
        <input
          placeholder="Email"
          type="email"
          value={employee.email}
          onChange={(e) => handleChange(e)}
          name="email"
        />
        {validationErrors.email && (
          <span style={{ color: "red" }}>email is wrong</span>
        )}
        <input
          placeholder="Salary"
          type="number"
          value={employee.salary}
          name="salary"
          onChange={(e) => handleChange(e)}
        />
        {validationErrors.salary && (
          <p style={{ color: "red" }}>salary must be more than 15000</p>
        )}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
