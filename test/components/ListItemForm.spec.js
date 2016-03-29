import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItemForm from '../../src/components/ListItemForm'
import expect from 'expect';

describe('ListItemForm component', () => {
  const wrapper = mount(
    <ListItemForm handleAddItem={() => { return; }} />
  );

  it('should have one input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  })

  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('should start with blank formValue state', () => {
    expect(wrapper.state().formValue).toEqual('');
  })

  it('should clear the formValue on click', () => {
    wrapper.setState({ formValue: 'item Z' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('formValue')).toEqual('');
  })
})
