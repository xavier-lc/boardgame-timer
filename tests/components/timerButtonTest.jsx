import expect from 'expect';
import setup from './../setup';
import dummyHandler from './../dummyHandler';
import TimerButton from './../../lib/components/TimerButton.jsx';

const clic = dummyHandler('clic');

/**
 * Set up a TimerButton element for testing purposes
 *
 * @param {boolean} isVisible
 * @returns {ReactElement}
 */
function propsSetup(isVisible) {
  const props = {
    clickHandler: clic,
    isVisible: isVisible,
    txt: 'test me',
  };

  return setup(TimerButton, props);
}

describe('TimerButton', function () {
  it('should render element', function () {
    const element = propsSetup(true);

    expect(element.type).toBe('button');
    expect(element.props.children).toBe('test me');
    expect(element.props.className).toExclude('hidden');
    expect(element.props.onClick).toBe(clic);
  });

  it('should have "hidden" class if not visible', function () {
    const element = propsSetup(false);

    expect(element.props.className).toInclude('hidden');
  });
});
