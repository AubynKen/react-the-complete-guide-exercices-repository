import { useState } from 'react';

const SimpleInput = (props) => {

  const [username, setUsername] = useState('');
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);

  const isUsernameValid = username.trim().length !== 0;
  const isUsernameInputValid = isUsernameValid || !isUsernameTouched;

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const usernameBlurHandler = (event) => {
    setIsUsernameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsUsernameTouched(true);
    if (!isUsernameValid) return;
    setIsUsernameTouched(false);
    setUsername('');
    console.log(username);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input type="text" value={username} onChange={usernameChangeHandler}
                 onBlur={usernameBlurHandler} id="name"/>
          {!isUsernameInputValid && <p>Username can't be empty!</p>}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
  );
};

export default SimpleInput;
