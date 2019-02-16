import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import EmailForm from './EmailForm';

describe('EmailForm', () => {
  describe('without enzyme', () => {
    test('renders component tree correctly', () => {
      const tree = renderer
      .create(<EmailForm />)
      .toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with enzyme', () => {
    test('renders component tree correctly', () => {
      const tree = shallow(<EmailForm />);
  
      expect(tree).toMatchSnapshot();
    });

    test('changing from field should persist in state', () => {
      const tree = shallow(<EmailForm />);
      const fromMockValue = 'John Doe';

      expect(tree.state().from).toBe('');

      tree.find('#from').simulate('change', {
        target: {
          name: 'from',
          value: fromMockValue
        }
      });

      expect(tree.state().from).toBe(fromMockValue);
    });

    test('sendEmail handler should be called on click event', () => {
      const tree = shallow(<EmailForm />);

      const spy = jest.spyOn(tree.instance(), 'sendEmail');
      tree.instance().forceUpdate();
      
      tree.find('button[type="submit"]').simulate('click', {
        preventDefault: jest.fn()
      });

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
