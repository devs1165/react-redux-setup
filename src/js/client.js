import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// configs
import store from './store';
// import registerServiceWorker from './commons/libs/registerServiceWorker';
import RouteConfig from './components/Router/RouteConfig';
// component
import Router from './components/Router';

var root = document.getElementById('root')

if(root)
	ReactDOM.render(
		<Provider store = {store}>
			<Router routes = {RouteConfig}/>
		</Provider>,
	root);

// register service worker
// registerServiceWorker();