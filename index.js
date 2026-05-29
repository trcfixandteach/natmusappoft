import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import App from './App';

export default function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
