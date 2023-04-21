import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CardItem from '../../src/components/CardItem';
import {MockResponse} from '../../src/interfaces';

describe('CardItem component', () => {
	const mockItem: MockResponse = {
		id: 1,
		title: 'Test item',
		description: 'This is a test item',
		date: new Date(),
		image: 'https://example.com/image.jpg',
	};
	it('should render the component correctly', () => {
		const {getByTestId} = render(
			<CardItem item={mockItem} onPress={() => {}} />,
		);
		const image = getByTestId('card-item-image');
		// const arrow = getByTestId('card-item-arrow');
		expect(image).toBeDefined();
		// expect(arrow).toBeDefined();
	});
	it('should call the onPress function when the item is pressed', () => {
		const onPressMock = jest.fn();
		const {getByTestId} = render(
			<CardItem item={mockItem} onPress={onPressMock} />,
		);
		const container = getByTestId('card-item-container');
		fireEvent.press(container);
		expect(onPressMock).toHaveBeenCalledTimes(1);
		expect(onPressMock).toHaveBeenCalledWith(mockItem);
	});
});
