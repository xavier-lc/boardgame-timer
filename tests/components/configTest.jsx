import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Config from './../../lib/components/Config.jsx';
import TurnTime from './../../lib/components/TurnTime.jsx';
import { initialState } from './../../lib/reducers/config';

/**
 * dummy change handler function
 */
function change() {
  console.log('change');
}

/**
 * Set up a Config element for testing purposes
 *
 * @returns {ReactElement}
 */
function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<Config {...props} />);

  return renderer.getRenderOutput();
}

describe('Config', function () {
  it('should render element', function () {
    const props = {
      config: initialState,
      selectChangeHandler: change,
    };
    const element = setup(props);
    const panelBody = element.props.children;
    const turnTime = panelBody.props.children[0];

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('panel panel-primary');

    expect(panelBody.type).toBe('div');
    expect(panelBody.props.className).toBe('panel-body');

    expect(TestUtils.isElementOfType(turnTime, TurnTime)).toBe(true);
  });
});
