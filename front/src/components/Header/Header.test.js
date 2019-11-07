import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
    let seedHeader = [];
    beforeAll(()=> {
        for (let i = 0; i < 10; i++) {
            seedHeader.push({
                title: `Header ${i}`,
            });
        }
    });
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Header title="New Header"  dispatch={dispatch}/>);
    });
});