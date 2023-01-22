import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/paginationSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filters: filtersReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
