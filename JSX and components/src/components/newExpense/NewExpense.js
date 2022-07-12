import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addItem={props.addItem}/>
    </div>
  );
};

export default NewExpense;