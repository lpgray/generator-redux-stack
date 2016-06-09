import { createReducer } from 'redux-create-reducer';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = 0;

export default createReducer(initialState, {
  [INCREMENT_COUNTER](state) {
    return state + 1;
  },
  [DECREMENT_COUNTER](state) {
    return state - 1;
  }
});
