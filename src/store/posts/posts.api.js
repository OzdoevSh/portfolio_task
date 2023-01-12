import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),

  endpoints: build => ({
    getPosts: build.query({
      query: () => ({
        url: 'posts',
      })
    }), 


  })

})

export const { useLazyGetPostsQuery } = postsApi