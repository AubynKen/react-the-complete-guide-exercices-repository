import classes from './ProfileForm.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const ProfileForm = () => {

  const AuthCtx = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
