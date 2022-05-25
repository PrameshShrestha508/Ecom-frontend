import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const viewTask = createApi({
  reducerPath: "viewTask",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getviewTask: builder.query({
      query: () => "tasks",
    }),
  }),
});

export const { useGetviewTaskQuery } = viewTask;
