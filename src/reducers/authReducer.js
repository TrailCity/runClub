import types from "../actions/types";

const initialState = {
  isAuthenticating: false,
  user: {},
  signInError: false,
  signInErrorMessage: "",
  signUpError: false,
  signUpErrorMessage: "",
  showSignUpConfirmationModal: false,
  confirmSignUpError: false,
  confirmSignUpErrorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isAuthenticating: true,
        signInError: false
      };
    case types.LOG_IN_SUCCESS:
      return {
        isAuthenticating: false,
        user: action.user
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        signInError: true,
        signInErrorMessage: action.error.message
      };
    case types.LOG_OUT:
      return {
        ...initialState
      };
    case types.SIGN_UP:
      return {
        ...state,
        isAuthenticating: true
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        signUpError: true,
        signUpErrorMessage: action.error.message
      };
    case types.SHOW_SIGN_UP_CONFIRMATION_MODAL:
      return {
        ...state,
        isAuthenticating: false,
        showSignUpConfirmationModal: true
      };
    case types.CONFIRM_SIGNUP:
      return {
        ...state,
        isAuthenticating: true
      };
    case types.CONFIRM_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        showSignUpConfirmationModal: false
      };
    case types.CONFIRM_SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        confirmSignUpError: false,
        confirmSignUpErrorMessage: action.error.message
      };
    default:
      return state;
  }
};
