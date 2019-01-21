import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ipInfoReducer } from './reducers/ipInfoReducer';
import { textReducer } from './reducers/textReducer';
import { requestStatusReducer } from './reducers/requestStatusReducer';

import { loadState, saveState } from './utils/localStorage';
import { IState } from './interfaces/IState';

const persistedState = loadState();

const initialState: IState = {
    text: '',
    ipInfo: [
        {
            city: 'Mountain view',
            city_rus: 'Маунтин-Вью',
            country: 'United states',
            country_code: 'US',
            country_rus: 'США',
            ip: '8.8.8.8',
            region: 'California',
            region_rus: 'Калифорния',
            time_zone: '-07:00',
            zip_code: '94043',
            latitude: '37.405992',
            longitude: '-122.078515'
        }
    ],
    requestStatus: {
        status: 'success'
    }
}


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        ipInfo: ipInfoReducer,
        text: textReducer,
        requestStatus: requestStatusReducer
    }),
    persistedState || initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
