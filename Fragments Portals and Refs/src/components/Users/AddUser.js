import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const [error, setError] = useState();
  const ageRef = useRef();
  const usernameRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    usernameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
      <div>
        {error && (
            ReactDOM.createPortal(<ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />, document.getElementById('overlay'))
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                ref={usernameRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                id="age"
                type="number"
                ref={ageRef}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
  );
};

export default AddUser;
