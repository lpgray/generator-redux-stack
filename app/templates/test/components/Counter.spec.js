/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import Counter from '../../src/components/Counter';

function setup() {
  const actions = {
    increment: spy(),
    incrementAsync: spy(),
    decrement: spy()
  };
  const component = renderIntoDocument(<Counter counter={1} {...actions} />);
  return {
    component,
    actions,
    buttons: scryRenderedDOMComponentsWithTag(component, 'button').map(button => button),
    p: findRenderedDOMComponentWithTag(component, 'p')
  };
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.textContent).to.match(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[0]);
    expect(actions.increment.called).to.be.true;
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[1]);
    expect(actions.decrement.called).to.be.true;
  });

  it('third button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[2]);
    expect(actions.incrementAsync.called).to.be.true;
  });
});
