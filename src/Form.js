import React from 'react';

const Form = ({ formData, handleSubmit, handleChange }) => {
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">First Name</label>
        <input
          autoComplete="off"
          required
          type="text"
          value={formData.firstName}
          name="firstName"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor="">Last Name</label>
        <input
          autoComplete="off"
          required
          type="text"
          value={formData.lastName}
          name="lastName"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>Birth date</label>
        <input
          required
          type="date"
          value={formData.birthdate}
          name="birthdate"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>Age</label>
        <input
          required
          type="number"
          value={formData.age}
          name="age"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>Add birthday</button>
      </form>
    </div>
  );
};

export default Form;
