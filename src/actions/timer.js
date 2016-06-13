import * as types from '../constants/ActionTypes';

function tick() {
  return {
    type: types.TIMER_TICK,
  };
}

export { tick };
