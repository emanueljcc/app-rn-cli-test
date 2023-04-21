import React from 'react';
import {render} from '@testing-library/react-native';
import SearchSVG from '../../../src/components/SVG/SearchSVG';

test('renders SearchSVG correctly', () => {
	const {getByTestId} = render(<SearchSVG />);
	const svgElement = getByTestId('search-svg');
	expect(svgElement).toBeTruthy();
});
