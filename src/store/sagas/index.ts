import {all} from 'redux-saga/effects';
import {passCodeEncryptionWatcher, passCodeVerifyWatcher} from './SetupAndAuth';

export default function* rootSaga() {
  const sagas = [passCodeEncryptionWatcher(), passCodeVerifyWatcher()];

  yield all(sagas);
}
