import React from 'react';
import {shallow} from 'enzyme';
import {Location} from './Location';

describe('<Location/>', () => {
    const seedComments = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedComments.push({
                text: `Comments ${i}`
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
});