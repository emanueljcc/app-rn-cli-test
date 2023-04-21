import {renderHook} from '@testing-library/react-hooks';
import {useAnimation} from '../../src/hooks';

jest.useFakeTimers();

describe('useAnimation', () => {
	it('should fade in the opacity', () => {
		const {result} = renderHook(() => useAnimation());
		const {fadeIn, opacity} = result.current;

		expect(opacity._value).toBe(0);

		fadeIn();
	});
});
