import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import './index.css';
import Myroute from './Myroute';
import Layout from './Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Layout>
      <Myroute />
    </Layout>
  </Provider>,
  // </React.StrictMode>,
);
