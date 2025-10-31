import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ApiResponse } from '../types/ApiResponse';
export type { ApiResponse };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
  endpoints: builder => ({
    getBooks: builder.query<ApiResponse, void>({
      query: () => '/volumes?q=search+text',
    }),
  }),
});

export const { useGetBooksQuery } = apiSlice;
