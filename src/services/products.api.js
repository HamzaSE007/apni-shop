import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => '/products'
        }),
        getTrendingProducts: builder.query({
            query: () => '/products?limit=6'
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const { 
    useGetAllProductsQuery, 
    useGetTrendingProductsQuery, 
    useGetProductByIdQuery 
} = api
