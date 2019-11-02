import React from 'react';
import {shallow} from 'enzyme';

import {Start} from './start';
import Location from '../Location/Location';
import {addLocation} from '../actions';

describe('<Start/>', () => {
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
        shallow(<Start title="Foo" locations={[]} dispatch={dispatch} />);
    });

    it('Renders the title', () => {
        const dispatch = jest.fn();
        const title = 'Foo';
        const wrapper = shallow(
            <Start title={title} locations={[]} dispatch={dispatch} />
        );
        expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
    });

    it('Dispatches addLocation from addLocation', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Start locations={[]} dispatch={dispatch} />);
        // Ignore any previous calls to dispatch
        dispatch.mockClear();
        const instance = wrapper.instance();
        const title = seedLocations[0].title;
        instance.addLocation(title);
        expect(dispatch).toHaveBeenCalledWith(addLocation(title));
    });

    it('Renders the locations', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <Start locations={seedLocations} dispatch={dispatch} />
        );
        const locations = wrapper.find(Location);
        expect(locations.length).toEqual(seedLocations.length);
        const firstLocation = locations.first();
        expect(firstLocation.prop('title')).toEqual(seedLocations[0].title);
    });
});