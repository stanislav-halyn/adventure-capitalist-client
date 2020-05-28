// Modules
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Reducers
import rootReducer from './reducers';


export const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer({}));

  return store;
};
