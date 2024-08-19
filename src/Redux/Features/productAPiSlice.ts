import { paramsProps } from '../../Pages/types';
import { apiSlice } from './apiSlice';
import { categoryResTyp, productIdProps, productResTyp } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<categoryResTyp[], void>({
            query: () => '/category/get-all-categories'
        }),
        getAllProducts: builder.query<productResTyp[], paramsProps>({
            query: (params) => {
                return {
                    url: '/products/get-all-products',
                    params: {
                        keyword: params.keyword
                    }
                };
            }
        }),
        getProduct: builder.query<productResTyp, productIdProps>({
            query: ({ id }) => {
                return {
                    url: `/products/get-product/${id}`
                };
            }
        })
    })
});

export const { useGetAllCategoriesQuery, useGetAllProductsQuery, useGetProductQuery } = productApiSlice;
