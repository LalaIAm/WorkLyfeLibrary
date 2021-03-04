import React from "react";
import Button from "./index";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter})

describe("The Button component", () => {
    const text = "button";
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button>{text}</Button>)
    })
  it('renders a <button>', () => {
      
      expect(wrapper.type()).toBe('button')
  });

  it('correctly renders its children', () => {
      
      expect(wrapper.prop('children')).toContain(text)
  })

  it('passes appearance prop through', () => {
      const appearance = 'primary';
      wrapper.setProps({appearance})
      expect(wrapper.prop('appearance')).toBe(appearance)
  })
});
