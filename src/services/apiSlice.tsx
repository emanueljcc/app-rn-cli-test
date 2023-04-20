import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MockResponse} from '../interfaces';

const API_URL = 'https://6222994f666291106a29f999.mockapi.io/api';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: async headers => {
			return headers;
		},
		timeout: 10000,
	}),
	tagTypes: [''],
	endpoints: builder => ({
		// TODO: TIPAR
		getData: builder.query<MockResponse, any>({
			query: () => ({
				url: 'v1/products',
			}),
		}),
	}),
});

export const {useGetDataQuery} = apiSlice;
