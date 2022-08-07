import { useState } from 'react';

const useInput = (validationScheme, initialValue = '') => {

  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationScheme(value);
  const hasError = !isValid && isTouched;

  const reset = () => {
    setValue(initialValue);
    setIsTouched(false);
  };

  const handleChange = (event) => setValue(event.target.value);
  const handleBlur = (event) => setIsTouched(true);

  return {
    value, hasError, handleChange, handleBlur, reset, isValid
  };
};

export default useInput;