import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:54321/api',
    baseUrl: 'https://maveko-mp.onrender.com/api',
    credentials: 'include'
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});
