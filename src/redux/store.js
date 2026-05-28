import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './slices/authSlice';
import loanReducer from './slices/loanSlice';
import userReducer from './slices/userSlice';
import paymentReducer from './slices/paymentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loans: loanReducer,
  user: userReducer,
  payment: paymentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
