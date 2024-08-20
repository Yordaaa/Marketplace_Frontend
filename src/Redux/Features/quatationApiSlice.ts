import { quatationResType, QuotationByIdProps } from '../../Pages/types';
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
        getQuotes: builder.query<quatationResType, void>({
            query: () => ({
                url: '/quatation/get-all-quatation'
            })
        }),
        getQuotesById: builder.query<QuotationByIdProps, string>({
            query: (id: string) => ({
                url: `/quatation/get-quatationById/${id}`
            })
        }),
        respondeCustmerQuote: builder.mutation({
            query: (data) => {
                return {
                    url: '/quatation/respond-customer-quote',
                    method: 'POST',
                    body: data
                };
            }
        }),
        sendOtp: builder.mutation({
            query: (quoteId) => {
                return {
                    url: `/quatation/get-otp/${quoteId}`,
                    method: 'POST'
                };
            }
        }),
        verifyOtp: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/quatation/verfiy-otp',
                    method: 'POST',
                    body: data
                };
            }
        })
    })
});

export const { useRequestQuatationMutation, useGetQuotesQuery, useGetQuotesByIdQuery, useRespondeCustmerQuoteMutation, useSendOtpMutation, useVerifyOtpMutation } = quatationApiSlice;
