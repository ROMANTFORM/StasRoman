import React, {Suspense} from 'react'
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from 'app/store';
import App from './App';
import { SkeletonTheme } from 'react-loading-skeleton';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<SkeletonTheme baseColor="rgba(215, 232, 244, 0.05)" highlightColor="rgba(215, 232, 244, 1)"/>}>
                <App/>
            </Suspense>
        </Provider>
    </BrowserRouter>
);
