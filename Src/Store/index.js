import { createStore } from 'redux';
import reducers from '../redcers';

const store = createStore(reducers);

export default store;
