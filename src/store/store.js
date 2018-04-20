import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from  '../reducers';

export default(initialState) => {
    return createStore(
      rootReducer,
        compose(
          applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
