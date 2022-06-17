import {
  COMPLETED_WALLET_SETUP,
  INCORRECT_PASSCODE,
  LOGIN_REFRESH,
  SUCCESSFULL_LOGIN,
  WALLET_SETUP_FAILED,
} from '~store/actions/ActionTypes';
import {ActionTypes} from '~store/types/types';

const initialState: {
  walletSetupCompleted: boolean;
  walletSetupFailed: boolean;
  incorrectPasscode: null | boolean;
  loginSuccessfull: boolean;
} = {
  walletSetupCompleted: false,
  walletSetupFailed: false,
  incorrectPasscode: null,
  loginSuccessfull: false,
};

export const SetupAndAuth: (
  state: typeof initialState | undefined,
  action: ActionTypes
) => typeof initialState = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETED_WALLET_SETUP: {
      return {
        ...state,
        walletSetupCompleted: true,
      };
    }
    case WALLET_SETUP_FAILED: {
      return {
        ...state,
        walletSetupFailed: true,
      };
    }
    case INCORRECT_PASSCODE: {
      return {
        ...state,
        loginSuccessfull: false,
        incorrectPasscode: true,
      };
    }
    case SUCCESSFULL_LOGIN: {
      return {
        ...state,
        incorrectPasscode: false,
        loginSuccessfull: true,
      };
    }
    case LOGIN_REFRESH: {
      return {
        ...state,
        incorrectPasscode: null,
        loginSuccessfull: false,
      };
    }
    default: {
      return state;
    }
  }
};
