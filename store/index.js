import { createStore, combineReducers } from 'redux';
import useReducer from './reducer/image';

const rootReducer = combineReducers({
  image: useReducer
})

const store = createStore(rootReducer)

export default store