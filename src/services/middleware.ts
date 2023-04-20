import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {Middleware} from '@reduxjs/toolkit';

/**
 * "If the action is rejected, log the action to the console."
 *
 * Now, let's add this to our store:
 * @returns A function that returns a function that returns a function that returns the result of
 * calling `next` with the action.
 */
export const rtkQueryErrorLogger: Middleware = () => next => action => {
	if (isRejectedWithValue(action)) {
		const errResponses = {
			status: action?.payload?.status || 500,
			message:
				action?.payload?.data?.error?.message || 'Un error ha ocurrido 😥',
		};

		console.log('action => ', {errResponses, action});
	}

	return next(action);
};
