import React from 'react';
import {render} from '@testing-library/react-native';
import {SectionLabel} from '../../src/components';

describe('SectionLabel', () => {
	it('renders correctly', () => {
		const {getByText} = render(<SectionLabel title="Test Title" />);
		const titleElement = getByText('Test Title');
		expect(titleElement).toBeDefined();
	});
});
