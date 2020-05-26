// Modules
import { createStore } from 'redux';

// Reducers
import rootReducer from './reducers';


export const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
}
