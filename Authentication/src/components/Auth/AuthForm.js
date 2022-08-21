import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const FORM_TYPE = {
  LOGIN: 'login',
  SIGNUP: 'signup',
};

const LOGIN_API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACv1RS7qaQfIVDRp4WE2xt9Djvl8h9BYQ';

const AuthForm = () => {
  const [formType, setFormType] = useState(FORM_TYPE.LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setFormType(formType === FORM_TYPE.LOGIN ? FORM_TYPE.SIGNUP : FORM_TYPE.LOGIN);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const loginHelper = async () => {
      setIsLoading(true);
      const response = await fetch(LOGIN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password, returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        setIsLoading(false);
        const data = await response.json();
        const errorMessage = data.error?.message;
        alert(errorMessage ?? 'Authentication failed');
        return;
      }
      setIsLoading(false);
      alert('Authentication success!');
    };

    if (formType === FORM_TYPE.SIGNUP) {
      loginHelper();
    }

  };

  return (
      <section className={classes.auth}>
        <h1>{formType === FORM_TYPE.LOGIN ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required ref={passwordInputRef}/>
          </div>
          <div className={classes.actions}>
            {!isLoading && (<>
              <button>{formType === FORM_TYPE.LOGIN ? 'Login' : 'Create Account'}</button>
              <button
                  type="button"
                  className={classes.toggle}
                  onClick={switchAuthModeHandler}
              >
                {formType === FORM_TYPE.LOGIN ?
                    'Create new account' :
                    'Login with existing account'}
              </button>
            </>)}
          </div>
        </form>
      </section>
  );
};

export default AuthForm;
