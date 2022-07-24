import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (!props.items.length) {
    return <p className="expenses-list__fallback">The list is empty.</p>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            amount={item.amount}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
