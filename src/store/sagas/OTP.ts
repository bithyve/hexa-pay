import {put, takeEvery} from 'redux-saga/effects';
import {OTP_VERIFIED, REQUEST_OTP, VERIFY_OTP} from '~store/actions/ActionTypes';
import {RequestOTPAction, VerifyOTPAction} from '~store/types/types';

function* requestOTPWorker(action: RequestOTPAction) {
  // yield call to backend endpoint for OTP Request
  console.log(action.payload.num);
}

export function* requestOTPWatcher() {
  yield takeEvery(REQUEST_OTP, requestOTPWorker);
}

function* verifyOTPWorker(action: VerifyOTPAction) {
  const OTP = '1234';

  if (action.payload.otp === OTP) {
    // make sure that OTP was correct
    yield put({type: OTP_VERIFIED});
  } else {
    console.log('Incorrect OTP');
  }
}

export function* verifyOTPWatcher() {
  yield takeEvery(VERIFY_OTP, verifyOTPWorker);
}
