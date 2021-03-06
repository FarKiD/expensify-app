import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, createdAt, amount }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount).format(amount > 999999 ? '0,0a' : '0,0')} Toman
			- 
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;