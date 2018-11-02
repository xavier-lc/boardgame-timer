import expect from 'expect';
import setup from './../setup';
import TwoTimingDigits from './../../lib/components/TwoTimingDigits.jsx';

describe('TwoTimingDigits', function () {
  it('should render element', function () {
    const element = setup(TwoTimingDigits, { value: 0 });

    expect(element.type).toBe('span');
    expect(element.props.children).toBe('00');
  });
});
