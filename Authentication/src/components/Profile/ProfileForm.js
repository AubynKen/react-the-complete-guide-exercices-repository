import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfileForm = () => {
  const routerHistory = useHistory();
  const { token } = useContext(AuthContext);
  const passwordInputRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const newPassword = passwordInputRef.current?.value;
    const httpResponse = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idToken: token,
            returnSecureToken: false,
            password: newPassword,
          }),
        });

    if (!httpResponse.ok) {
      const data = await httpResponse.json();
      alert(data.error?.message || 'Something went wrong');
      return;
    }
    alert('Password changed successfully');
    routerHistory.replace('/');
  };

  return (
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" ref={passwordInputRef}/>
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
  );
};

export default ProfileForm;
