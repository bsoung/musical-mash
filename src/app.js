import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import { LandingLayout } from './components/layout';

const app = (
	<Provider store={ store.configureStore() }>
		<LandingLayout />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));