import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from 'store';
import Main from 'pages';

function Index() {
  return (
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Index/>, root);
}
