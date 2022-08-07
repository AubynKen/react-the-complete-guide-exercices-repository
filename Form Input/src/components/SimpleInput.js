import { useState } from 'react';

const SimpleInput = (props) => {

  /* username state handling */
  const [username, setUsername] = useState('');
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);

  const isUsernameValid = username.trim().length !== 0;
  const isUsernameInputValid = isUsernameValid || !isUsernameTouched;

  const usernameChangeHandler = e => setUsername(e.target.value);
  const usernameBlurHandler = () => setIsUsernameTouched(true);

  /* email state handling */
  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isEmailValid = email.includes('@');
  const isEmailInputValid = isEmailValid || !isEmailTouched;

  const emailChangeHandler = e => setEmail(e.target.value);
  const emailBlurHandler = () => setIsEmailTouched(true);

  /* overall state handling */
  const isAllFieldValid = isEmailValid && isUsernameValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isAllFieldValid) {
      setIsUsernameTouched(true);
      setIsEmailTouched(true);
      return;
    }
    setIsUsernameTouched(false);
    setIsEmailTouched(false);
    setUsername('');
    setEmail('');
    console.log('username: ' + username);
    console.log('email: ' + email);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input type="text" value={username} onChange={usernameChangeHandler}
                 onBlur={usernameBlurHandler} id="name"/>
          {!isUsernameInputValid && <p>Username can't be empty!</p>}
          <label> Email:
            <input type="email" value={email} onChange={emailChangeHandler}
                   onBlur={emailBlurHandler} id="email"/>
          </label>
          {!isEmailInputValid && <p>Email is not valid!</p>}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
  );
};

export default SimpleInput;
