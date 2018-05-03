import types from "./types";
import { Alert } from "react-native";
import { Auth } from "aws-amplify";

function signUp() {
  return {
    type: types.SIGN_UP
  };
}

function signUpSuccess(user) {
  return {
    type: types.SIGN_UP_SUCCESS,
    user
  };
}

function signUpFailure(err) {
  return {
    type: types.SIGN_UP_FAILURE,
    error: err
  };
}

export function createUser(username, password, email, phone_number) {
  return dispatch => {
    dispatch(signUp());
    let phone;
    const firstTwoDigits = phone_number.substring(0, 2);
    if (firstTwoDigits === "+1") {
      phone = phone_number;
    } else {
      phone = "+1" + phone_number;
    }
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number: phone
      }
    })
      .then(data => {
        console.log("data from signUp: ", data);
        dispatch(signUpSuccess(data));
        dispatch(showSignUpConfirmationModal());
      })
      .catch(err => {
        console.log("error signing up: ", err);
        dispatch(signUpFailure(err));
      });
  };
}

function logIn() {
  return {
    type: types.LOG_IN
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT
  };
}

function logInSuccess(user) {
  return {
    type: types.LOG_IN_SUCCESS,
    user: user
  };
}

function logInFailure(err) {
  return {
    type: types.LOG_IN_FAILURE,
    error: err
  };
}

export function authenticate(username, password) {
  return dispatch => {
    dispatch(logIn());
    Auth.signIn(username, password)
      .then(user => {
        dispatch(logInSuccess(user));
        dispatch(showSignInConfirmationModal());
      })
      .catch(err => {
        console.log("errror from signIn: ", err);
        dispatch(logInFailure(err));
      });
  };
}

export function showSignInConfirmationModal() {
  return {
    type: types.SHOW_SIGN_IN_CONFIRMATION_MODAL
  };
}

export function showSignUpConfirmationModal() {
  return {
    type: types.SHOW_SIGN_UP_CONFIRMATION_MODAL
  };
}

export function confirmUserLogin(authCode) {
  return (dispatch, getState) => {
    dispatch(confirmLogIn());
    const {
      auth: { user }
    } = getState();
    console.log("state: ", getState());
    Auth.confirmSignIn(user, authCode)
      .then(data => {
        console.log("data from confirmLogin: ", data);
        dispatch(confirmLoginSuccess(data));
      })
      .catch(err => {
        console.log("error signing in: ", err);
        dispatch(confirmSignUpFailure(err));
      });
  };
}

function confirmLogIn() {
  return {
    type: types.CONFIRM_LOGIN
  };
}

function confirmLoginSuccess(user) {
  return {
    type: types.CONFIRM_LOGIN_SUCCESS,
    user
  };
}

function confirmLoginFailure() {
  return {
    type: types.CONFIRM_LOGIN_FAILURE,
    user
  };
}

export function confirmUserSignUp(username, authCode) {
  return dispatch => {
    dispatch(confirmSignUp());
    Auth.confirmSignUp(username, authCode)
      .then(data => {
        console.log("data from confirmSignUp: ", data);
        dispatch(confirmSignUpSuccess());
        setTimeout(() => {
          Alert.alert("Successfully Signed Up!", "Please Sign");
        }, 0);
      })
      .catch(err => {
        console.log("error signing up: ", err);
        dispatch(confirmSignUpFailure(err));
      });
  };
}

function confirmSignUp() {
  return {
    type: types.CONFIRM_SIGNUP
  };
}

function confirmSignUpSuccess() {
  return {
    type: types.CONFIRM_SIGNUP_SUCCESS
  };
}

function confirmSignUpFailure(error) {
  return {
    type: types.CONFIRM_SIGNUP_FAILURE,
    error
  };
}

export const increment = () => ({
  type: types.INCREMENT
});
export const decrement = () => ({
  type: types.DECREMENT
});
