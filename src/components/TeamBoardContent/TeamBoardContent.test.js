import React from 'react';
import renderer from "react-test-renderer";
import {shallow, mount} from "enzyme";

import TeamBoardContent from './TeamBoardContent';
import ShowAll from './../ShowAll/ShowAll'

it("renders TeamBoardContent snapshot correctly", () => {
    const tree = renderer
        .create(<TeamBoardContent/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

const myWrapper = mount(<TeamBoardContent/>).find(TeamBoardContent);

it("TeamBoradContent state change call 'showAllClicked''", () => {
    let showAll = myWrapper.find(ShowAll);
    //showAutoSuggest should be false initially
    expect(myWrapper.state('showAll')).toBe(false);

    const fakeEvent = {
        preventDefault: () => console.log('preventDefault')
    };
    showAll.simulate('click', fakeEvent)

    expect(myWrapper.state('showAll')).toBe(true);
});

it('TeamBoardContent removeMember check', () => {

    const wrapper = shallow(<TeamBoardContent/>);
    expect(wrapper.state('teamMembers').length).toEqual(12);
    const instance = wrapper.instance();
    instance.removeMember(1);
    expect(wrapper.state('teamMembers').length).toEqual(11);
});

it('TeamBoardContent addMemberInTeam check', () => {

    const wrapper = shallow(<TeamBoardContent/>);
    expect(wrapper.state('teamMembers').length).toEqual(12);
    const instance = wrapper.instance();
    instance.addMemberInTeam({
        username: 'test',
        id: 13,
        role : 'test',
        picture: 'pic'
    });
    expect(wrapper.state('teamMembers').length).toEqual(13);
});