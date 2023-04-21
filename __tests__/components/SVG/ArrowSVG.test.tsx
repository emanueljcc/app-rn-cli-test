import React from 'react';
import {render} from '@testing-library/react-native';
import {ArrowSVG} from '../../../src/components';
import '@testing-library/jest-dom/extend-expect';

describe('ArrowSVG', () => {
	it('should render without crashing', () => {
		render(<ArrowSVG />);
	});

	it('should have testID of "arrow-svg"', () => {
		const {getByTestId} = render(<ArrowSVG />);
		expect(getByTestId('arrow-svg')).toBeDefined();
	});
});
