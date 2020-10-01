import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

import {fetchCollectionStart} from './shop/shop.sagas';

const sagaMiddeware = createSagaMiddleware();

const middlewares = [sagaMiddeware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddeware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default { store, persistor };
