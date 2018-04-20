import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store/store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

const StoreInstance = Store()

ReactDOM.render(
    <Provider store={StoreInstance}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();