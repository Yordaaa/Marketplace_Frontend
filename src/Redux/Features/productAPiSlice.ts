import { apiSlice } from './apiSlice';
import { categoryResTyp, productIdProps, productResTyp } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<categoryResTyp[], void>({
            query: () => '/category/get-all-categories'
        }),
        getAllProducts: builder.query<productResTyp[], void>({
            query: () => '/products/get-all-products'
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
