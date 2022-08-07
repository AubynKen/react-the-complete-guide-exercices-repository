import { useInput } from '../hooks';

const BasicForm = (props) => {

  /* determines if the string is non-empty after being stripped / trimmed */
  const validateName = string => {
    return string.trim().length > 0;
  };

  /* states and handling logic hooks */
  const firstName = useInput(validateName);
  const lastName = useInput(validateName);
  const email = useInput(string => string.includes('@'));

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const isEveryStateValid = firstName.isValid && lastName.isValid && email.isValid;
    if (!isEveryStateValid) {
      return;
    }
    console.log('success!');
    for (const input of [firstName, lastName, email]) {
      input.reset();
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name"
                   value={firstName.value}
                   onChange={firstName.handleChange}
                   onBlur={firstName.handleBlur}
            />
            {firstName.hasError && <p>Invalid First Name!</p>}
          </div>
          <div className="form-control">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name"
                   value={lastName.value}
                   onChange={lastName.handleChange}
                   onBlur={lastName.handleBlur}
            />
            {lastName.hasError && <p>Invalid Last Name!</p>}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name"
                 value={email.value}
                 onChange={email.handleChange}
                 onBlur={email.handleBlur}
          />
          {lastName.hasError && <p>Invalid Email!</p>}
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
  );
};

export default BasicForm;
