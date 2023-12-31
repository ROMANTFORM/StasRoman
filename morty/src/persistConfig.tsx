// persistConfig.js
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

export const createPersistReducer = (reducer) => persistReducer(persistConfig, reducer);
