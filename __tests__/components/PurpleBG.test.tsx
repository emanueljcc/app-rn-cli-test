import React from 'react';
import {render} from '@testing-library/react-native';
import PurpleBG from '../../src/components/PurpleBG';

describe('PurpleBG component', () => {
	it('renders correctly', () => {
		const {getByText} = render(<PurpleBG title="Test Title" />);
		const titleElement = getByText('Test Title');
		expect(titleElement).toBeTruthy();
		expect(titleElement).toBeDefined();
	});
});
