import {SETUP_WALLET, VERIFY_WALLET} from '../actions/ActionTypes';
import {WalletSetupRunning, WalletVerify} from '~store/types/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import dbManager from '~storage/realm/dbManager';
import * as Cipher from '../../common/encryption';
import * as SecureStore from '../../storage/secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loginFailed,
  loginSuccessfull,
  walletSetupCompletedAction,
  walletSetupFailed,
} from '~store/actions/UserActions/UserActions';
import * as SecureStore1 from 'expo-secure-store';
import RNSecureStorage from 'rn-secure-storage';
import cryptoJS from 'crypto-js';

function* passCodeEncryptionWorker(action: WalletSetupRunning) {
  const hash: string = yield call(Cipher.hash, action.payload.code);
  const AES_KEY: string = yield call(Cipher.generateKey);
  const encryptedKey: string = yield call(Cipher.encrypt, AES_KEY, hash);
  const uint8array: Uint8Array = yield call(Cipher.stringToArrayBuffer, AES_KEY);
  // console.log(uint8array);
  try {
    yield call(dbManager.initDb, uint8array);
    const flag: boolean = yield call(SecureStore.store, hash, encryptedKey);
    console.log(flag);
    if (!flag) {
      yield call(AsyncStorage.setItem, 'hasCreds', 'false');
      return;
    }
    yield call(AsyncStorage.setItem, 'hasCreds', 'true');
    yield put(walletSetupCompletedAction());
  } catch (e) {
    yield put(walletSetupFailed());
  }
}

export function* passCodeEncryptionWatcher() {
  yield takeEvery(SETUP_WALLET, passCodeEncryptionWorker);
}

function* passCodeVerifyWorker(action: WalletVerify) {
  const hash: string = yield call(Cipher.hash, action.payload.code);
  // const key: string = yield call(SecureStore.fetch, hash);
  const k: string = yield RNSecureStorage.get('HEX-PAY-KEY');
  const h: {enc_key: string; hash: string} = JSON.parse(k);
  // const key: string = yield call(Cipher.decrypt, h.enc_key, hash);
  const key = yield call(cryptoJS.AES.decrypt, h.enc_key, hash);
  // console.log(Cipher.stringToArrayBuffer(key.toString()));

  try {
    const l1 = key.toString(cryptoJS.enc.Utf8);
    const openKey: Uint8Array = yield call(Cipher.stringToArrayBuffer, l1);
    yield call(dbManager.initDb, openKey);
    yield put(loginSuccessfull());
  } catch (er) {
    yield put(loginFailed());
    console.log(er);
  }
}

export function* passCodeVerifyWatcher() {
  yield takeEvery(VERIFY_WALLET, passCodeVerifyWorker);
}
