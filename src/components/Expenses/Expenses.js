import React, {useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

	const [selectedData, setSelectedData] = useState([]);

	const filterChangeHandler = (selectedYear) => {
		const filteredExpenses = props.items.filter((expense) => {
			const expenseYear = String(new Date(expense.date).getFullYear());
			return expenseYear === selectedYear;
		});
		setSelectedData(filteredExpenses);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter items={props.items} onFilterChange={filterChangeHandler} />
			<ExpenseChart items={selectedData} />
			<ExpensesList items={selectedData} />
		</Card>
	)
}
export default Expenses;