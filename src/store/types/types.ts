import {
  COMPLETED_WALLET_SETUP,
  CONTCTS_DEND,
  CONTCTS_READ,
  FNF_USED,
  INCORRECT_PASSCODE,
  LOGIN_REFRESH,
  OTP_VERIFIED,
  SETUP_WALLET,
  SUCCESSFULL_LOGIN,
  VERIFY_WALLET,
  WALLET_SETUP_FAILED,
} from '~store/actions/ActionTypes';

export interface WalletSetupCompleted {
  type: typeof COMPLETED_WALLET_SETUP;
}

export interface WalletSetupFailed {
  type: typeof WALLET_SETUP_FAILED;
}

export interface WalletSetupRunning {
  type: typeof SETUP_WALLET;
  payload: {
    code: string;
  };
}

export interface WalletVerify {
  type: typeof VERIFY_WALLET;
  payload: {
    code: string;
  };
}

export interface IncorrectPasscode {
  type: typeof INCORRECT_PASSCODE;
}

export interface SuccessfulLoginAction {
  type: typeof SUCCESSFULL_LOGIN;
}

export interface LoginRefreshAction {
  type: typeof LOGIN_REFRESH;
}

export interface RequestOTPAction {
  type: string;
  payload: {
    num: string;
  };
}

export interface VerifyOTPAction {
  type: string;
  payload: {
    otp: string;
  };
}

export interface FnfAccessed {
  type: typeof FNF_USED;
}

export interface ContactsAllowed {
  type: typeof CONTCTS_READ;
}

export interface ContactsNotAllowed {
  type: typeof CONTCTS_DEND;
}

export type ActionTypes =
  | WalletSetupCompleted
  | WalletSetupFailed
  | WalletSetupRunning
  | WalletVerify
  | IncorrectPasscode
  | SuccessfulLoginAction
  | LoginRefreshAction
  | FnfAccessed
  | ContactsAllowed
  | ContactsNotAllowed;
