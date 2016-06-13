import * as types from '../constants/ActionTypes';
import { tick } from '../core/timer';

const initialState = {
  secondsElapsed: 0,
};

function timer(state = initialState, action) {
  switch (action.type) {
    case types.TIMER_TICK:
      return tick(state);
    default:
      return state;
  }
}

export default timer;
