//项目入口，从这里开始运行

import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './day-03/store';    //'./store'
import { Provider } from 'react-redux';
import App from './day-03/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

