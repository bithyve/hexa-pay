import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {reduxStorage} from '~storage';
import {SetupAndAuth} from './setupAndAuth/SetupAndAuth';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

//update reducers when created
const setupAndAuthReducer = persistReducer(persistConfig, SetupAndAuth);

const rootReducer = combineReducers({
  setupAndAuth: setupAndAuthReducer,
});

export default rootReducer;
