  
import {ADD_LOCATION, addLocation, ADD_COMMENT, addComment} from './index';

describe('addLocation', () => {
    it('Should return the action', () => {
        const title = 'Location title';
        const action = addLocation(title);
        expect(action.type).toEqual(ADD_LOCATION);
        expect(action.title).toEqual(title);
    });
});

// describe('addComment', () => {
//     it('Should return the action', () => {
//         const text = 'Comment text';
//         // const locationIndex = 10;
//         const action = addComment(text, locationIndex);
//         expect(action.type).toEqual(ADD_COMMENT);
//         expect(action.text).toEqual(text);
//         expect(action.locationIndex).toEqual(locationIndex);
//     });
// });