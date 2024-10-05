import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProducts } from "../../utils/type";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    // getPlants: builder.query({
    //   query: () => ({
    //     method: "GET",
    //     url: "/product",
    //     providesTags: ["TProducts"],
    //   }),
    // }),

    // getSinglePlants: builder.query({
    //   query: (_id) => ({
    //     url: `/product/${_id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["TProducts"],
    // }),

    createPlants: builder.mutation({
      query: (data) => ({
        url: "/product/create-product",
        method: "POST",
        body: data,
      }),
    }),

    // updatePlants: builder.mutation<
    //   TProducts,
    //   Partial<TProducts> & Pick<TProducts, "_id">
    // >({
    //   query: (data) => ({
    //     url: `/product/${data._id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),

    // deleteProduct: builder.mutation<void, string>({
    //   query: (_id: string) => ({
    //     url: `/product/${_id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["TProducts"],
    // }),
    creteOrder: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      },
    }),
  }),
});

export const {
  // useGetPlantsQuery,
  // useGetSinglePlantsQuery,
  useCreatePlantsMutation,
  // useDeleteProductMutation,
  // useUpdatePlantsMutation,
  useCreteOrderMutation,
} = baseApi;
