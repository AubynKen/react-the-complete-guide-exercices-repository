import "./Expenses.css";
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2020");

  const itemListFiltered = props.expenses.filter((item) => {
    const yearAdded = item.date.getFullYear();
    return parseInt(yearSelected) === yearAdded;
  });

  return (
      <Card className="expenses">
        <ExpenseFilter year={yearSelected} setYear={setYearSelected}/>
        <ExpenseList items={itemListFiltered}/>
      </Card>
  );
}

export default Expenses;
