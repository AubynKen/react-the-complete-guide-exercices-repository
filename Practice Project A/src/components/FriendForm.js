import React from 'react';
import classes from './FriendForm.module.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const FriendForm = (props) => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [warningMessage, setWarningMessage] = React.useState('Everything looks good.');

  const nameOnChangeHandler = (event) => setName(event.target.value);
  const ageOnChangeHandler = (event) => setAge(event.target.value);

  const validateForm = () => {
    if (name.length < 3) {
      setWarningMessage('Name must be at least 3 characters long.');
      setIsModalOpen(true);
      return false;
    }
    if (age < 0 || age > 150) {
      setWarningMessage('Age must be between 0 and 150.');
      setIsModalOpen(true);
      return false;
    }
    return true;
  };

  const buttonOnClickHandler = () => {
    if (!validateForm()) return;
    props.onAddItem({name, age, id: Math.random().toString()});
    setName('');
    setAge(0);
  };

  return (
      <div>

        <Modal isOpen={isModalOpen} style={customStyles}>
          <div>{warningMessage}</div>
          <div style={{textAlign: 'center', marginTop: '1rem'}}>
            <button type="button" onClick={() => setIsModalOpen(false)}>OK</button>
          </div>

        </Modal>

        <form>
          <div className={classes['form-control']}>
            <div>
              <label>
                Name: <input type="text" value={name} onChange={nameOnChangeHandler}/>
              </label>
            </div>
            <div>
              <label>
                Age: <input type="number" min={0} value={age} onChange={ageOnChangeHandler}/>
              </label>
            </div>
            <div>
              <button type="button" onClick={buttonOnClickHandler}>Add</button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default FriendForm;