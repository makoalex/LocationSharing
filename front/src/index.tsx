import React from 'react';
import { createRoot } from 'react-dom/client';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


