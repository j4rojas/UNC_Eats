import * as actions from '../actions';

const initialState = {
    starts: {}
};

const defaultStart = {
    locations: []
};

export const uncReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LOCATION) {
        const {title, startId} = action;
        const starts = state.starts;
        const start = Object.assign({}, defaultStart, starts[startId]);
        start.location = [...start.location, {
            // comments: [],
            title
        }];
        return Object.assign({}, state, {
            starts: Object.assign({}, starts, {
                [startId]: start
            })
        });
    }
    else if (action.type === actions.ADD_COMMENT) {
        const {text, startId, locationIndex} = action;
        const starts = state.starts;
        const start = Object.assign({}, defaultStart, starts[startId]);
        start.location = start.location.map((location, index) => {
            if (index !== locationIndex) {
                return location;
            }
            return Object.assign({}, location, {
                comments: [...location.comments, {
                    text
                }]
            });
        });

        return Object.assign({}, state, {
            starts: Object.assign({}, starts, {
                [startId]: start
            })
        });
    }
    return state;
};
