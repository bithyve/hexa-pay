import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import rootSaga from './sagas';
import rootReducer from './reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  persistStore(store);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
