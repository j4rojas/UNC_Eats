import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm/>', () => {
    const dispatch = jest.fn();
    it('Renders without crashing', () => {
        shallow(<LoginForm dispatch={dispatch}/>);
    }); 
});