import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

/**
 * We are using mount (full DOM) to load our component but we should use shallow
 * in this case irl because CommentBox doesn't have any children.
 * 
 * Also, when using mount, we need to make sure to cleanup after each test.
 */

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// Describe is used to describe common behavior between tests.
describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        // Force the component to update because setState is asyncronous.
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        // Prop function is referring to the value prop that is passed to the component,
        // not the property on the dom element.
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('upon form submit, textarea get emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})
