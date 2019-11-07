import React from 'react';
import {shallow} from 'enzyme';
import Start from './start';

describe('<Start/>', () => {
    let seedLocations = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedLocations.push({
                text: `Location ${i}`,
            });
        }
    });
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Start locations={[]} dispatch={dispatch} />);
    });
});