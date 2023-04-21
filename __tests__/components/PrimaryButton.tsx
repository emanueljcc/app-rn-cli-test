import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PrimaryButton} from '../../src/components';

describe('PrimaryButton', () => {
	const mockOnPress = jest.fn();

	it('renders correctly', () => {
		const {getByTestId} = render(<PrimaryButton title="Press me" />);
		const button = getByTestId('primary-button');
		expect(button).toBeTruthy();
	});

	it('should render the title correctly', () => {
		const {getByText} = render(<PrimaryButton title="Press me" />);

		expect(getByText('Press me')).toBeDefined();
	});

	it('should call the onPress function when the button is pressed', () => {
		const {getByTestId} = render(
			<PrimaryButton title="Press me" onPress={mockOnPress} />,
		);

		fireEvent.press(getByTestId('primary-button'));

		expect(mockOnPress).toHaveBeenCalled();
	});
});
