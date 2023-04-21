import React from 'react';
import {render} from '@testing-library/react-native';
import {SkeletonLoader} from '../../src/components';

describe('SkeletonLoader', () => {
	it('renders 6 skeletons', () => {
		const {getAllByTestId} = render(<SkeletonLoader />);
		const skeletons = getAllByTestId('skeleton');
		expect(skeletons.length).toBe(6);
	});
});
