import React from 'react';
import {render} from '@testing-library/react-native';
import NotFound from '../../src/components/NotFound';

describe('NotFound', () => {
	it('should render the component correctly', () => {
		const {getByTestId, getByText} = render(<NotFound />);
		const animation = getByTestId('not-found-animation');
		const text = getByText('No hay resultados');
		expect(animation).toBeDefined();
		expect(text).toBeDefined();
	});
});
