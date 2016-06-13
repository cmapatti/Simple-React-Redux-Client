import { expect } from 'chai';
import { tick } from '../src/core/timer';

describe('application logic', () => {

  describe('tick', () => {

    it('increments the count', () => {
      const state = {
        secondsElapsed: 0
      };
      const nextState = tick(state);
      expect(nextState.secondsElapsed).to.equal(state.secondsElapsed + 1);
    });

  });

});