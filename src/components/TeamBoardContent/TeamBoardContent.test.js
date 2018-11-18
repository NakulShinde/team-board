import React from 'react';
import renderer from "react-test-renderer";

import TeamBoardContent from './TeamBoardContent';

it("renders TeamBoardContent snapshot correctly", () => {
    const tree = renderer
        .create(<TeamBoardContent />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});