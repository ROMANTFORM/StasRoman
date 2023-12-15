import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const {REACT_APP_API_BASE_URL} = process.env;

export const entryApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_API_BASE_URL,
        prepareHeaders: (headers, {}) => {
            return headers;
        },
    }),
    tagTypes: [
        'GET_EPISODES',
    ],
    endpoints: () => ({}),
});



