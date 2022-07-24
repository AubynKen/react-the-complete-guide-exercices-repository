import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
        <div className={`form-control ${showWarning ? 'warning' : ''}`}>
          <label>
            Course Goal
          </label>
          <input type="text"
                 onChange={goalInputChangeHandler}/>
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
