import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal).format(expensesTotal > 999999 ? '0,0a' : '0,0');
	
	return (
		<div>
			<h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} Toman</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: expensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);