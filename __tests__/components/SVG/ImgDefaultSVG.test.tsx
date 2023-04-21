import React from 'react';
import {render} from '@testing-library/react-native';
import {ImgDefaultSVG} from '../../../src/components';

test('renders ImgDefaultSVG component', () => {
	const {getByTestId} = render(<ImgDefaultSVG />);
	const svgElement = getByTestId('svg-element');
	expect(svgElement).not.toBeNull();
});
