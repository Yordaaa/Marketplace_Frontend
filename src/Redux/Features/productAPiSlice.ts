import { paramsProps } from '../../Pages/types';
import { apiSlice } from './apiSlice';
import { categoryResTyp, ProductCardProps, productIdProps, productResTyp } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<categoryResTyp[], string>({
            query: (resPerPage) => {
                return {
                    url: '/category/get-all-categories',
                    params: { perPage: resPerPage }
                };
            }
        }),
        getProductsByCategory: builder.query({
            query: (params) => {
                return {
                    url: '/category/getCategory-product',
                    params: {
                        category: params.category
                    }
                };
            }
        }),

        getAllProducts: builder.query<ProductCardProps, paramsProps>({
            query: (params) => {
                return {
                    url: '/products/get-all-products',
                    params: {
                        keyword: params.keyword,
                        page: params.page
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

export const { useGetAllCategoriesQuery, useGetAllProductsQuery, useGetProductQuery, useGetProductsByCategoryQuery } = productApiSlice;
