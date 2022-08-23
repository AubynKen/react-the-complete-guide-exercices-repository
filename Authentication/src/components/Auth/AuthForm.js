import { useContext, useRef, useState } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../contexts/AuthContext';

const FORM_TYPE = {
  LOGIN: 'login',
  SIGNUP: 'signup',
};

const API_KEY = process.env.REACT_APP_API_KEY;
const SIGNUP_API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const LOGIN_API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const AuthForm = () => {
  console.log(API_KEY);

  const [formType, setFormType] = useState(FORM_TYPE.LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setFormType(formType === FORM_TYPE.LOGIN ? FORM_TYPE.SIGNUP : FORM_TYPE.LOGIN);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const authHelper = async () => {
      setIsLoading(true);

      let requestURL = '';
      switch (formType) {
        case FORM_TYPE.SIGNUP:
          requestURL = SIGNUP_API_URL;
          break;
        case FORM_TYPE.LOGIN:
          requestURL = LOGIN_API_URL;
          break;
        default:
          console.error("formType should be either FORM_TYPE.SIGNUP or FORM_TYPE.LOGIN!")
      }

      const response = await fetch(requestURL, {
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
        alert(errorMessage ?? `${formType === FORM_TYPE.LOGIN ? 'Login' : 'Signup'} failed`);
        return;
      }
      setIsLoading(false);

      if (formType === FORM_TYPE.SIGNUP) {
        alert('Signup success!');
        return;
      }

      if (formType === FORM_TYPE.LOGIN) {
        alert('Authentication success!');
        const data = await response.json();
        const authToken = data.idToken;
        authCtx.login(authToken);
      }

    };

    authHelper();

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
