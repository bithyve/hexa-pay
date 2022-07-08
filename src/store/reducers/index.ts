import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {reduxStorage} from '~storage';
import {SetupAndAuth} from './setupAndAuth/SetupAndAuth';
import OTPReducer from './OTP';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

//update reducers when created
const setupAndAuthReducer = persistReducer(persistConfig, SetupAndAuth);
const OTPPersistReducer = persistReducer(persistConfig, OTPReducer);

const rootReducer = combineReducers({
  setupAndAuth: setupAndAuthReducer,
  otp: OTPPersistReducer,
});

export default rootReducer;
