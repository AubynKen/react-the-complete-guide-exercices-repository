import "./ExpenseItems.css";
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems(props) {
  const [yearSelected, setYearSelected] = useState("2020");

  const itemListFiltered = props.expenses.filter((item) => {
    const yearAdded = item.date.getFullYear();
    return parseInt(yearSelected) === yearAdded;
  });

  return (
      <Card className="expenses">
        {yearSelected}
        <ExpenseFilter year={yearSelected} setYear={setYearSelected}/>
        {itemListFiltered.map((item) => (
            <ExpenseItem
                key={item.id}
                date={item.date}
                amount={item.amount}
                title={item.title}
            />
        ))}
      </Card>
  );
}

export default ExpenseItems;
