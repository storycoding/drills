import React from 'react';
import ReactDOM from 'react-dom';

// connecting to redux
import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
	<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();