import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const viewEmployee = createApi({
  reducerPath: "viewEmployee",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getviewEmployee: builder.query({
      query: () => "users",
    }),
    getviewEmployeeDetail: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetviewEmployeeQuery, useGetviewEmployeeDetailQuery } =
  viewEmployee;
