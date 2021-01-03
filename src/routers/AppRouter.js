import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const EditTest = (props) => {
	console.log(props.match.params.id)
	console.log(props)
	return (
		<div>{props.match.params.id}</div>
	);
};
	
const AppRouter = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} exact={true} />
				<Route path="/edit/:id" component={ EditExpensePage } />
				<Route path="/help" component={HelpPage} exact={true} />
				<Route component={NotFoundPage} />
			</Switch>	
		</div>
	</Router>
);

export default AppRouter;