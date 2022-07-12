import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const titleOnChangeHandler = ({target: {value}}) =>
      setExpenseTitle(value);
  const dateOnChangeHandler = ({target}) => {
    setExpenseDate(target.value);
  };
  const amountOnChangeHandler = (event) => setExpenseAmount(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addItem({
      id: Math.random(),
      title: expenseTitle,
      date: new Date(expenseDate),
      amount: expenseAmount,
    });
    [setExpenseAmount, setExpenseDate, setExpenseTitle].map((fn) => fn(""));
  };

  return (
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title:</label>
            <input
                value={expenseTitle}
                onChange={titleOnChangeHandler}
                type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Date:</label>
            <input
                value={expenseDate}
                onChange={dateOnChangeHandler}
                type="date"
            />
          </div>
          <label></label>
          <div className="new-expense__control">
            <label>Amount: </label>
            <input
                value={expenseAmount}
                onChange={amountOnChangeHandler}
                type="number"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Submit</button>
        </div>
      </form>
  );
};

export default ExpenseForm;
