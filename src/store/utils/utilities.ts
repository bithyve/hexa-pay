import {take, fork} from 'redux-saga/effects';
import {ActionTypes} from '~store/types/types';

export const createWatcher = (worker: any, type: string) => {
  return function* () {
    while (true) {
      const action: ActionTypes = yield take(type);
      yield fork(worker, action);
    }
  };
};

export const requestTimedout = () => {
  console.log(
    'Request Timeout!',
    'Unable to get a response from server. Please, try again shortly'
  );
};
