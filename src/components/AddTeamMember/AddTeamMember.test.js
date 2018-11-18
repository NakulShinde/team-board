import React from "react";
import {mount} from "enzyme";
import renderer from "react-test-renderer";

import AddTeamMember from "./AddTeamMember";
import styles from './AddTeamMember.module.scss'

it("renders AddTeamMember snapshot correctly", () => {
    const tree = renderer
        .create(<AddTeamMember/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

const myWrapper = mount(<AddTeamMember/>).find(AddTeamMember);

it("render a AddTeamMember", () => {
    expect(myWrapper.exists()).toBe(true);
});
it("render memberAdd div", () => {
    let elementClass = ['.', styles.memberAdd].join('');
    
    expect(myWrapper.find(elementClass).length).toBe(1);
});


it("AddTeamMember state check", () => {
    let elementClass = ['.', styles.memberAdd].join('');
    let addMemberDiv = myWrapper.find(elementClass);
    //showAutoSuggest should be false initially
    expect(myWrapper.state('showAutoSuggest')).toBe(false);

    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    addMemberDiv.simulate('click', fakeEvent)
    let showAutoSuggest = myWrapper.state('showAutoSuggest')

    expect(showAutoSuggest).toBe(true);
});
