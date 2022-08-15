import classes from './Notification.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Notification = () => {

  const dispatch = useDispatch();
  const showNotification = useSelector(state => state.ui.showNotification);
  const { status, title, message } = useSelector(state => state.ui.notification);

  if (!showNotification) return;

  const cssClasses = `${classes.notification} ${status}`;

  const handleClose = () => {
    dispatch(uiActions.hideNotification());
  }

  return (
      <section className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}<button style={{color: "black"}} onClick={handleClose}>X</button></p>
      </section>
  );
};

export default Notification;