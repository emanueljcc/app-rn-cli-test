import {configureStore} from '@reduxjs/toolkit';

// reducers
import rootReducer from './combineReducers';

// api
import {apiSlice} from '../services/apiSlice';
import {rtkQueryErrorLogger} from '../services/middleware';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: {},
		}).concat(apiSlice.middleware, rtkQueryErrorLogger),
});
