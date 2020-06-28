import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'pages';
import { Provider } from 'react-redux';
import { TestSSRState } from 'store/reducer';
import { Store } from 'redux';
import { StaticRouter } from 'react-router-dom';

export function renderApp(store: Store<TestSSRState>, url: string) {
  const context = {};
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
}
