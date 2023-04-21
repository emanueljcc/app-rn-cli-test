import React from 'react';
import {render} from '@testing-library/react-native';
import {CardPoints} from '../../src/components';

describe('CardPoints', () => {
	const total = 1000;

	it('renders correctly', () => {
		const {getByText} = render(<CardPoints total={1000} />);
		const monthText = getByText(/pts/i);
		expect(monthText).toBeDefined();
	});

	it('should render the month and total points correctly', () => {
		const {getByText} = render(<CardPoints total={total} />);

		expect(getByText('Abril')).toBeDefined();
	});
});
