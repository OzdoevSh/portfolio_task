import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const portfolioApi = createApi({
  reducerPath: 'portfolio/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/'
  }),

  endpoints: build => ({
    getPortfolio: build.query({
      query: (search, filter) => ({
        url: `portfolio`,
        params: {
          q: search,
          type_like: filter
        }
      })
    }),

    createProject: build.mutation({
      query: (project) => ({
        url: 'portfolio',
        method: 'POST',
        credentials: 'include',
        body: project,
      })
    })

  })

})

export const { useLazyGetPortfolioQuery, useCreateProjectMutation } = portfolioApi