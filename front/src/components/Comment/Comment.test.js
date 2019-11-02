import React from 'react';
import {shallow} from 'enzyme';

import Comment from './comment';

describe('<Comment />', () => {
    it('Renders without crashing', () => {
        shallow(<Comment text="Foo" />);
    });

    it('Renders the text', () => {
        const text = 'Foo';
        const wrapper = shallow(<Comment text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});