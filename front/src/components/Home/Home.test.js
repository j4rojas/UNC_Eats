import React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

describe('<Home/>', () => {
    let seedLocations = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedLocations.push({
                title: `Location ${i}`,
                comments: []
            });
        }
    });

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Home title="Foo" locations={[]} dispatch={dispatch} />);
    });
});