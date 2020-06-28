import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Pages from 'pages';
import { TestSSRState } from 'store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from 'components/Theme';
import 'normalize.css';

const renderMethod = process.env.NODE_ENV !== 'production' ? render : hydrate;

function Index() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <Router>
            <Pages />
          </Router>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = document.getElementById('root');

interface MyWindow extends Window {
  __INITIAL_STATE__: TestSSRState,
}

declare let window: MyWindow;

if (root) {
  renderMethod(<Index/>, root, () => delete window.__INITIAL_STATE__);
}
