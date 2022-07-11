import "./ExpenseItems.css";
import Card from './Card';
import ExpenseItem from "./ExpenseItem";

function ExpenseItems(props) {
  const itemList = props.expenses.map((item) => (
      <ExpenseItem
          key={item.id}
          date={item.date}
          amount={item.amount}
          title={item.title}
      />
  ));

  return <Card className="expenses">{itemList}</Card>;
}

export default ExpenseItems;
