import {OTP_VERIFIED, REQUEST_OTP} from '~store/actions/ActionTypes';

const initialState: {
  lastTime: number | null;
  reqTimes: number;
  verified: boolean;
} = {
  lastTime: null,
  reqTimes: 0,
  verified: false,
};

const OTPReducer: (
  state: typeof initialState | undefined,
  action: {type: string; payload: {num: string} | undefined}
) => typeof initialState = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_OTP: {
      return {
        ...state,
        lastTime: Date.now(),
        reqTimes: state.reqTimes + 1,
      };
    }
    case OTP_VERIFIED: {
      return {
        ...state,
        lastTime: null,
        reqTimes: 0,
        verified: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default OTPReducer;
