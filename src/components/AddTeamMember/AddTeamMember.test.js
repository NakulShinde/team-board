import React from "react";
import {mount, shallow} from "enzyme";
import renderer from "react-test-renderer";

import AddTeamMember from "./AddTeamMember";

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
    expect(myWrapper.find('.memberAdd').length).toBe(1);
});


it("AddTeamMember state check", () => {
    let addMemberDiv = myWrapper.find('.memberAdd');
    //showAutoSuggest should be false initially
    expect(myWrapper.state('showAutoSuggest')).toBe(false);

    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    addMemberDiv.simulate('click', fakeEvent)
    let showAutoSuggest = myWrapper.state('showAutoSuggest')

    expect(showAutoSuggest).toBe(true);
});

it('AddTeamMember onBlurAutoSuggestField check', () => {
    const wrapper = shallow(<AddTeamMember/>);
    expect(wrapper.state('showAutoSuggest')).toEqual(false);
    const instance = wrapper.instance();
    instance.onAddMemberClick();
    expect(wrapper.state('showAutoSuggest')).toEqual(true);
    instance.onBlurAutoSuggestField();
    expect(wrapper.state('showAutoSuggest')).toEqual(false);
});

it('AddTeamMember onSelectUserFromAutoComplete check', () => {
    const props = {
        addMemberInTeam: jest.fn(() => {}),
    };
    const wrapper = shallow(<AddTeamMember {...props}/>);
    const instance = wrapper.instance();
    instance.onSelectUserFromAutoComplete({});

    expect(props.addMemberInTeam).toHaveBeenCalled();
});