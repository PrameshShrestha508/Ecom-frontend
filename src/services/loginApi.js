import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoutes, BASE_URL } from "../config/configRoute";

export const loginApi = createApi({
  reducerPath: "loginApi",
  // baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getLogin: builder.mutation({
      query: (data) => {
        return {
          url: apiRoutes.getLogin,
          method: "POST",
          body: { ...data },
        };
      },
    }),
    getForgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: apiRoutes.getForgotPass,
          method: "POST",
          body: { ...data },
        };
      },
    }),
    setNewPassword: builder.mutation({
      query: (data) => {
        // const token = data.token;
        return {
          url: apiRoutes.setNewPassword,
          method: "PATCH",
          // header: { Authorization: `Bearer ${token}` },
          body: {
            newPassword: data.newPassword,
            confirmPassword: data.confirmPassword,
          },
        };
      },
    }),
  }),
});

export const {
  useGetLoginMutation,
  useGetForgotPasswordMutation,
  useSetNewPasswordMutation,
} = loginApi;
