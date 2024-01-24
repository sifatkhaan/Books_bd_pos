import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export const baseApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl()
    }),
    endpoints: ()=>({}),
})