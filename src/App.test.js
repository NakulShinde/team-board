import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header with TestBirds heading', () => {
  const wrapper = shallow(<App />);
  const welcome = "TestBirds";
  expect(wrapper.contains(welcome)).toEqual(true);
});