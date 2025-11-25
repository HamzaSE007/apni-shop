import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => '/products'
        }),
        getTrendingProducts: builder.query({
            query: () => '/products?limit=06'
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),
        getAllProductCategory: builder.query({
            query: () => '/products/category-list'
        }),
        getProductByCategory: builder.query({
            query: (category) => `/products/category/${category}`
        })
    })
})

export const { 
    useGetAllProductsQuery, 
    useGetTrendingProductsQuery, 
    useGetProductByIdQuery,
    useGetAllProductCategoryQuery,
    useGetProductByCategoryQuery 
} = api
