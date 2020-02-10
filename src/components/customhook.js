import {useState} from 'react';

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  //handle on submit of form data
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();                                   //callback function in our case its alert of inputs given by user
  }
  //handle values of input fields
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;