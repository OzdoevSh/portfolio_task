import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./posts/posts.api";
import { portfolioApi } from "./portfolio/portfolio.api";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      postsApi.middleware, 
      portfolioApi.middleware
    )
  }
})