import {configureStore} from '@reduxjs/toolkit'

import {episodesApi} from 'features/episodes/episodes';
import {paginationEpisodesApi} from 'features/episodes/pagination'
import episodesReducer from 'features/episodes/episodes';
import historyReducer from 'features/History/History'

import {
    persistStore,
    persistReducer,

} from 'redux-persist';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist/es/constants';

import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    [episodesApi.reducerPath]: episodesApi.reducer,
    [paginationEpisodesApi.reducerPath]: paginationEpisodesApi.reducer,
    episodes: episodesReducer,
    history: historyReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware): any =>
        getDefaultMiddleware({
            serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},
        }).concat(episodesApi.middleware, paginationEpisodesApi.middleware),
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
