import { orderResType } from '../../Pages/order.types';
import { apiSlice } from './apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMyOrder: builder.query<orderResType, string>({
            query: (email) => {
                console.log(email);
                return {
                    url: `/quatation/get-my-qoute?email=${email}`
                };
            }
        })
    })
});

export const { useGetMyOrderQuery } = orderApiSlice;
