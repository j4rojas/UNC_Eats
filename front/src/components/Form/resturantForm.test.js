import React from 'react';
import {shallow, mount} from 'enzyme';
import restaurantForm from '../Form/restaurantForm';
import Button from 'react-bootstrap/Button';

describe('<restaurantForm />', () => {
    it('Renders without crashing', () => {
        shallow(<restaurantForm/>);
    });

    it('Renders the create button initially', () => {
        const wrapper = shallow(<restaurantForm />);
        expect(wrapper.hasClass('createBtn')).toEqual(true);
    });
});