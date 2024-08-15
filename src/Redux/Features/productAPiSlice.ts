import { apiSlice } from './APiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => '/category/get-all-categories'
        })
    })
});

export const { useGetAllCategoriesQuery } = productApiSlice;
