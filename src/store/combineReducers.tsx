import {combineReducers} from '@reduxjs/toolkit';

import {apiSlice} from '../services/apiSlice';

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
