import { createStore } from 'redux';

// import counter from './reducers';
import calculator from './reducers';

// let store = createStore(counter);
let store = createStore(calculator);
export default store;
