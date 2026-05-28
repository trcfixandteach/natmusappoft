const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'AUTH_LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'AUTH_LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'AUTH_REGISTER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'AUTH_REGISTER_SUCCESS':
      return { ...state, loading: false, isAuthenticated: false };
    case 'AUTH_REGISTER_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'AUTH_OTP_VERIFY_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'AUTH_LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
