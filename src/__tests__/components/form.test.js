import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from '../../components/form/form';

describe('<Form/>', () => {
  it('its alive at application start', () => {
    const form = shallow(<Form/>);
    expect(form.find('button').exists()).toBeTruthy();
  });
});