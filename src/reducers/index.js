
import {GET_BLOG_POSTS_SUCCESS} from '../actions';

const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case GET_BLOG_POSTS_SUCCESS:
            let posts = action.payload.slice(0, 5);

            state = {
                ...state,
                posts: posts
            };
            break;

        default:
            break;
    }

    return state;
};

export default AppReducer;
