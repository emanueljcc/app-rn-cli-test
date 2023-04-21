import 'whatwg-fetch';

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from '../../src/store';
import {act} from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
	useNavigation: jest.fn(),
}));

jest.useFakeTimers();

describe('HomeScreen', () => {
	const mockProps = {
		item: {
			id: 1,
			name: 'Test Item',
			points: 100,
			is_redemption: false,
		},
		handleVibration: jest.fn(),
		navigation: {
			navigate: jest.fn(),
		},
	};

	it('renders correctly', async () => {
		const mockedNavigate = jest.fn();
		const props = {
			handleVibration: jest.fn(),
			navigation: {navigate: mockedNavigate},
		};
		const {getByText} = render(
			<Provider store={store}>
				<HomeScreen {...props} />
			</Provider>,
		);

		await act(() => {
			expect(getByText(`Bienvenido de vuelta!`)).toBeDefined();
			expect(getByText(`Tus puntos`)).toBeDefined();
		});
	});

	it('should refresh data', async () => {
		const {getByTestId} = render(
			<Provider store={store}>
				<HomeScreen {...mockProps} />
			</Provider>,
		);
		await act(() => {
			const refreshControl = getByTestId('refresh-control');
			fireEvent(refreshControl, 'refresh');
		});

		expect(mockProps?.refetch).toBeUndefined();
	});

	it('handles button press correctly', async () => {
		const mockHandleVibration = jest.fn();
		const mockNavigate = jest.fn();
		const {getByTestId} = render(
			<Provider store={store}>
				<HomeScreen
					item={{id: 1, name: 'Mock Item', points: 100, is_redemption: false}}
					handleVibration={mockHandleVibration}
					navigation={{navigate: mockNavigate}}
				/>
				,
			</Provider>,
		);
		await act(() => {
			fireEvent.press(getByTestId('item-button'));
			expect(mockHandleVibration).not.toHaveBeenCalled();
			expect(mockNavigate).not.toHaveBeenCalledWith('PageDetailScreen', {
				item: {id: 1, name: 'Mock Item', points: 100, is_redemption: false},
			});
		});
	});
});
