import {
  COMPLETED_WALLET_SETUP,
  INCORRECT_PASSCODE,
  LOGIN_REFRESH,
  SETUP_WALLET,
  SUCCESSFULL_LOGIN,
  VERIFY_WALLET,
  WALLET_SETUP_FAILED,
} from '../ActionTypes';

export const walletSetupAction = (code: string) => {
  return {
    type: SETUP_WALLET,
    payload: {
      code,
    },
  };
};

export const walletSetupCompletedAction = () => {
  return {
    type: COMPLETED_WALLET_SETUP,
  };
};

export const walletSetupFailed = () => {
  return {
    type: WALLET_SETUP_FAILED,
  };
};

export const getUserVerified = (code: string) => {
  return {
    type: VERIFY_WALLET,
    payload: {
      code,
    },
  };
};

export const loginFailed = () => {
  return {
    type: INCORRECT_PASSCODE,
  };
};

export const loginSuccessfull = () => {
  return {
    type: SUCCESSFULL_LOGIN,
  };
};

export const loginRefresh = () => {
  return {
    type: LOGIN_REFRESH,
  };
};
