import {configureStore} from '@reduxjs/toolkit'

import {episodesApi} from 'features/episodes/episodes';

export const store = configureStore({
    reducer: {
        [episodesApi.reducerPath]: episodesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            episodesApi.middleware,
        ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
