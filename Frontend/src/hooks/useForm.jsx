import React, { useState } from "react";

import React from "react";

const useForm = (initialValues) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(inputs);
  };

  const handleInputChanges = (e) => {
    e.persits();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return {
    handleSubmit,
    handleInputChanges,
    inputs,
  };
};

export default useForm;
