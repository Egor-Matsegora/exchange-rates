import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root';
import thunk from 'redux-thunk';

const logger = createLogger({
  duretion: true,
  collapsed: true,
  colors: {
    title: () => '#139bfe',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#a47104',
    erroir: () => '#ff0005'
  }
});

const devMode = process.env.NODE_ENV !== 'production';

const enhanced = devMode ? composeWithDevTools : compose;

const middleware = [ thunk ];

devMode && middleware.push(logger);

const enhancedStore = enhanced(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancedStore);