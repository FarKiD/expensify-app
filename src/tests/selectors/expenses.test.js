import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by test value', () => {
	const filters = {
		text: 'e', //test value
		// default value for the rest
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by startDate', () => {
	const filters = {
		startDate: moment(0), //test value
		//default values
		text: '',
		sortBy: 'date',
		endDate: undefined
	};
	
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by endDate', () => {
	const filters = {
		endDate: moment(0),
		text: '',
		sortBy: 'date',
		startDate: undefined
	};
	
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should filter by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should filter by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
