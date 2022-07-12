import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";

function ExpenseItems(props) {
  const [yearSelected, setYearSelected] = useState("2020");

  const itemList = props.expenses.map((item) => (
      <ExpenseItem
          key={item.id}
          date={item.date}
          amount={item.amount}
          title={item.title}
      />
  ));

  return (
      <Card className="expenses">
        {yearSelected}
        <ExpenseFilter year={yearSelected} setYear={setYearSelected}/>
        {itemList}
      </Card>
  );
}

export default ExpenseItems;
