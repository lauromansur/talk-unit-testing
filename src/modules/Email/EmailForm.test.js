import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import EmailForm from './EmailForm';

describe('EmailForm', () => {
  test('renders component tree correctly (without enzyme)', () => {
    const tree = renderer
    .create(<EmailForm />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders component tree correctly (with enzyme)', () => {
    const tree = shallow(<EmailForm />);

    expect(tree).toMatchSnapshot();
  });
});
