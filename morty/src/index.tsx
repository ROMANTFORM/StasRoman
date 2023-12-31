import React, {Suspense} from 'react'
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from 'app/store';
import App from './App';
import { SkeletonTheme } from 'react-loading-skeleton';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<SkeletonTheme baseColor="rgba(215, 232, 244, 0.05)" highlightColor="rgba(215, 232, 244, 1)"/>}>
                    <App/>
                </Suspense>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
