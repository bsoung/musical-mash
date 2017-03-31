import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import { Landing } from './components/layout';

const app = (
	<Provider store={ store.configureStore() }>
		<Landing />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));