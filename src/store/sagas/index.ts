import {all} from 'redux-saga/effects';
import {requestOTPWatcher, verifyOTPWatcher} from './OTP';
import {passCodeEncryptionWatcher, passCodeVerifyWatcher} from './SetupAndAuth';

export default function* rootSaga() {
  const sagas = [
    passCodeEncryptionWatcher(),
    passCodeVerifyWatcher(),
    requestOTPWatcher(),
    verifyOTPWatcher(),
  ];

  yield all(sagas);
}
