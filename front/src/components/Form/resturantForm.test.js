import React from 'react';
import {shallow, mount} from 'enzyme';
import resturantForm from '../Form/resturantForm';
import Button from 'react-bootstrap/Button';

describe('<resturantForm />', () => {
    it('Renders without crashing', () => {
        shallow(<resturantForm/>);
    });

    it('Renders the create button initially', () => {
        const wrapper = shallow(<resturantForm />);
        expect(wrapper.hasClass('createBtn')).toEqual(true);
    });
});