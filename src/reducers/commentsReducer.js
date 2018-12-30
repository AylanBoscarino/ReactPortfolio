import { FETCH_COMMENTS, WRITE_COMMENT } from '../actions/types';

const initialState = {
    comments: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: payload
            };
        case WRITE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, payload]
            };
        default:
            return state;
    }
};
