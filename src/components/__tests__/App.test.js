import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows the comment box component', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});