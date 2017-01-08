import { createStore, applyMiddleware } from 'redux';
import counter from './reducers';

import createLogger from 'redux-logger';

// let store = createStore(counter);

//添加middleware
// 第一种写法
// let store = createStore(counter, applyMiddleware(createLogger()));

// 第二种写法
const finalCreateStore = applyMiddleware(createLogger())(createStore);
let store = finalCreateStore(counter);
export default store;
