import express from 'express';
import { renderApp } from 'server/utils/renderApp';
import { renderHtml } from './utils/renderHtml';
import { add } from 'store/entity';
import { configureStore } from '@reduxjs/toolkit';
import reducer from 'store/reducer';

export const router = express.Router();

router.get('*', async (req, res, next) => {
  try {
    const { css: styles, js: scripts } = res.locals.assets;

    const store = configureStore({
      reducer,
    });
    store.dispatch(add());
    store.dispatch(add());
    store.dispatch(add());
    store.dispatch(add());
    store.dispatch(add());
    const content = renderApp(store, req.url);

    const initialValues = `
      window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};
    `;

    res.send(renderHtml({ content, styles, scripts, initialValues }));
  } catch (error) {
    next(error);
  }
});
