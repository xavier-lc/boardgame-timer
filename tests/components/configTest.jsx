import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import setup from './../setup';
import dummyHandler from './../dummyHandler';
import Config from './../../lib/components/Config.jsx';
import TurnTime from './../../lib/components/TurnTime.jsx';
import { initialState } from './../../lib/reducers/config';

describe('Config', function () {
  it('should render element', function () {
    const props = {
      config: initialState,
      selectChangeHandler: dummyHandler('change'),
    };
    const element = setup(Config, props);
    const panelBody = element.props.children;
    const turnTime = panelBody.props.children[0];

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('panel panel-primary');

    expect(panelBody.type).toBe('div');
    expect(panelBody.props.className).toBe('panel-body');

    expect(TestUtils.isElementOfType(turnTime, TurnTime)).toBe(true);
  });
});
