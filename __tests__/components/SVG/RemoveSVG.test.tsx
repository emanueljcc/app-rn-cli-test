import React from 'react';
import {render} from '@testing-library/react-native';
import RemoveSVG from '../../../src/components/SVG/RemoveSVG';

describe('RemoveSVG', () => {
	it('renders correctly', () => {
		const {getByTestId} = render(<RemoveSVG />);
		const svg = getByTestId('remove-svg');
		expect(svg).not.toBeNull();
		expect(svg.props.width).toBe('17px');
		expect(svg.props.height).toBe('17px');
	});
});
