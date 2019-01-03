import { applyMiddleware, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers'

// logger
const loggerMiddleware = createLogger({});
// middleware
// const middleware = applyMiddleware(promise(), thunk, loggerMiddleware)
const middleware = applyMiddleware(promise(), thunk)
// enhancer
const enhancer = compose(
	middleware,
	persistState()
);

export default createStore(reducer, enhancer)
