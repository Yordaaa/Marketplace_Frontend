import { orderResType } from '../../Pages/order.types';
import { productDetail } from '../../Pages/types';
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
        }),
        getProductDetail: builder.query<productDetail, string>({
            query: (id) => {
                return {
                    url: `/quatation/get-qoute-detail/${id}`
                };
            }
        })
    })
});

export const { useGetMyOrderQuery, useGetProductDetailQuery } = orderApiSlice;
