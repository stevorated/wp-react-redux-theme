import { FETCH_TOTAL_POSTS } from '../actions';

export default (state = -1, action) => {
    switch (action.type) {
        case FETCH_TOTAL_POSTS:
            return action.payload;
    }
    return state;
};
