import moment from 'moment';

export default [{
	id: '1',
	description: 'Gum',
	note: '',
	amount: 500,
	createdAt: 0
}, {
	id: '2',
	description: 'Rent',
	note: '',
	amount: 50000,
	createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
	id: '3',
	description: 'Cream',
	note: '',
	amount: 7500,
	createdAt: moment(0).add(5, 'days').valueOf()
}];