import {REQUEST_OTP, VERIFY_OTP} from '../ActionTypes';

export const requestOTP = (number: string) => {
  return {
    type: REQUEST_OTP,
    payload: {
      num: number,
    },
  };
};

export const verifyOTP = (otp: string) => {
  return {
    type: VERIFY_OTP,
    payload: {
      otp,
    },
  };
};
