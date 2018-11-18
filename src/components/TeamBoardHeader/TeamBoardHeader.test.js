import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";

import TeamBoardHeader from './TeamBoardHeader';

it('renders TeamBoardHeader with "Your team for this test" heading', () => {
  const wrapper = shallow(<TeamBoardHeader />);
  const heading = 'Your team for this test';
  expect(wrapper.contains(heading)).toEqual(true);
});

it("renders TeamBoardHeader snapshot correctly", () => {
    const tree = renderer
        .create(<TeamBoardHeader />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});