import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PageDetailScreen from '../../src/screens/PageDetailScreen';

describe('PageDetailScreen', () => {
	const item = {
		createdAt: new Date(),
		points: 100,
	};

	const navigation = {
		goBack: jest.fn(),
	};

	const route = {
		params: {
			item,
		},
	};

	it('should render the details correctly', () => {
		const {getByText} = render(
			<PageDetailScreen navigation={navigation} route={route} />,
		);

		expect(getByText(`Detalles del producto:`)).toBeDefined();
		expect(getByText('Comprado', {exact: false})).toBeDefined();
		expect(getByText(`Con esta compra acumulaste:`)).toBeDefined();
		expect(getByText(`puntos`, {exact: false})).toBeDefined();
	});

	it('should call navigation.goBack() when the button is pressed', () => {
		const {getByTestId} = render(
			<PageDetailScreen navigation={navigation} route={route} />,
		);

		fireEvent.press(getByTestId('accept-button'));

		expect(navigation.goBack).toHaveBeenCalled();
	});
});
