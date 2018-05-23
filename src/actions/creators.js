import types from "./types";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";

function logIn() {
  return {
    type: types.LOG_IN
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

export function logOut() {
  return {
    type: types.LOG_OUT
  };
}

export function authenticate(username, password) {
  return dispatch => {
    dispatch(logIn());
    Auth.signIn(username, password)
      .then(user => {
        dispatch(logInSuccess(user));
      })
      .catch(err => {
        dispatch(logInFailure(err));
      });
  };
}

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

export function showSignUpConfirmationModal() {
  return {
    type: types.SHOW_SIGN_UP_CONFIRMATION_MODAL
  };
}

export function createUser(username, password, email) {
  return dispatch => {
    dispatch(signUp());
    Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
      .then(data => {
        dispatch(signUpSuccess(data));
        dispatch(showSignUpConfirmationModal());
      })
      .catch(err => {
        console.log("SignUpError: ", err);
        dispatch(signUpFailure(err));
      });
  };
}

function confirmSignUp() {
  return {
    type: types.CONFIRM_SIGN_UP
  };
}

function confirmSignUpSuccess() {
  return {
    type: types.CONFIRM_SIGN_UP_SUCCESS
  };
}

function confirmSignUpFailure(error) {
  return {
    type: types.CONFIRM_SIGN_UP_FAILURE,
    error
  };
}

export function confirmUserSignUp(username, authCode) {
  return dispatch => {
    dispatch(confirmSignUp());
    Auth.confirmSignUp(username, authCode)
      .then(data => {
        dispatch(confirmSignUpSuccess());
        setTimeout(() => {
          Alert.alert("Successfully Signed Up!", "Please Sign In");
        }, 0);
      })
      .catch(err => {
        console.log("ConfirmUserSignUp error:", err);
        dispatch(confirmSignUpFailure(err));
      });
  };
}

export const increment = () => ({
  type: types.INCREMENT
});
export const decrement = () => ({
  type: types.DECREMENT
});
