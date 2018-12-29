import { FETCH_COMMENTS } from '../actions/types';

const initialState = {
    comments: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COMMENTS:
            return { ...state, comments: payload };

        default:
            return state;
    }
};
