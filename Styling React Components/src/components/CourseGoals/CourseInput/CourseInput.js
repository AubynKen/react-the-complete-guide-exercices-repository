import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  & {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  & label, & input {
    color: ${props => props.showWarning ? 'red' : 'black'}
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const goalInputChangeHandler = event => {
    setShowWarning(false);
    const newValue = event.target.value;
    setEnteredValue(newValue);
    setIsValid(newValue.trim().length > 0);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!isValid) {
      setShowWarning(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <FormControl showWarning={showWarning}>
          <label>
            Course Goal
          </label>
          <input type="text"
                 onChange={goalInputChangeHandler}/>
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
