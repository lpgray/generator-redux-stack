/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../src/actions/counter';

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT_COUNTER });
  });

  // There's no nice way to test this at the moment...
  it('incrementAsync', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).to.be.a('function');
    const dispatch = spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.be.true;
      done();
    }, 5);
  });
});
