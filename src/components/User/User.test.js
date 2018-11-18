import React from 'react';
import { shallow } from 'enzyme';
import User from './User';


it('User removeMember check', () => {
    const props = {
        removeMember: jest.fn(() => {}),
        user: { id:0 }
    };
    const myWrapper = shallow(<User {...props}/>);
    let addMemberDiv = myWrapper.find('.memberRemove');

    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    addMemberDiv.simulate('click', fakeEvent)

    expect(props.removeMember).toHaveBeenCalled();
});