import React from 'react';
import {shallow} from 'enzyme';

import Address from '../Address/Address';

describe('<Address />', () => {
    it('Renders without crashing', () => {
        shallow(<Address text="Foo" />);
    });
    
    it('Renders the text', () => {
        const text = 'Foo';
        const wrapper = shallow(<Address text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});