import React from 'react';
import {render} from '@testing-library/react-native';
import {HeaderTitle} from '../../src/components';

describe('HeaderTitle', () => {
	it('renders correctly', () => {
		const {getByText} = render(<HeaderTitle />);
		const welcomeText = getByText('Bienvenido de vuelta!');
		const nameText = getByText('Ruben Rodriguez');
		expect(welcomeText).toBeDefined();
		expect(nameText).toBeDefined();
	});
});
