import { apiSlice } from './apiSlice';

export const quatationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        requestQuatation: builder.mutation({
            query: (data) => {
                return {
                    url: '/quatation/request-quatation',
                    method: 'POST',
                    body: data
                };
            }
        }),
        getQuotes: builder.query({
            query: () => ({
                url: 'https://api.example.com/quotes'
            })
        })
    })
});

export const { useRequestQuatationMutation, useGetQuotesQuery } = quatationApiSlice;
