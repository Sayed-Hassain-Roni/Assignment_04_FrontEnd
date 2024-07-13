import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
    }),
    getSinglePlants: builder.query({
      query: (_id) => ({
        url: `/product/${_id}`,
        method: "GET",
      }),
      //   providesTags: ["movies"],
    }),
  }),
});

export const { useGetPlantsQuery, useGetSinglePlantsQuery } = baseApi;
