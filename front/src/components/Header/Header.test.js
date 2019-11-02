import React from 'react';
import {shallow} from 'enzyme';

import Header from '../Header/Header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header text="Foo" />);
    });
    
    it('Renders the text', () => {
        const text = 'Foo';
        const wrapper = shallow(<Header text={text}/>);
        expect(wrapper.text()).toEqual(text);
    });
});