import React from 'react';
import {shallow} from 'enzyme';
import {Location} from './Location';
import Comment from '../Comment/Comment';
import {addComment} from '../../actions';

describe('<Location/>', () => {
    const seedComments = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedComments.push({
                text: `Comment ${i}`
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<Location title="Foo" comments={[]} />);
    });

    it('Renders the title', () => {
        const title = 'Foo';
        const wrapper = shallow(<Location title={title} comments={[]} />);
        expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    });

    it('Dispatches addComment from addComment', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = shallow(
            <Location comments={[]} index={index} dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        const text = seedComments[0].text;
        instance.addComment(text);
        expect(dispatch).toHaveBeenCalledWith(addComment(text, index));
    });

    it('Renders the comments', () => {
        const wrapper = shallow(<Location comments={seedComments} />);
        const comments = wrapper.find(Comment);
        expect(comments.length).toEqual(seedComments.length);
        const firstComment = comments.first();
        expect(firstComment.prop('text')).toEqual(seedComments[0].text);
    });
});
