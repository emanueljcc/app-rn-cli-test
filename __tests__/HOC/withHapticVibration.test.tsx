import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {withHapticVibration} from '../../src/HOC';
import {Text, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

describe('withHapticVibration', () => {
	const MockComponent = ({handleVibration}: any) => {
		return (
			<TouchableOpacity onPress={handleVibration}>
				<Text>Press me</Text>
			</TouchableOpacity>
		);
	};

	it('should call ReactNativeHapticFeedback.trigger() when the component is pressed', () => {
		const mockTrigger = jest.fn();
		ReactNativeHapticFeedback.trigger = mockTrigger;

		const WrappedComponent = withHapticVibration(MockComponent);
		const {getByText} = render(<WrappedComponent />);

		fireEvent.press(getByText('Press me'));

		expect(mockTrigger).toHaveBeenCalled();
	});
});
