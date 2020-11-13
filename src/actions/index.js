import axios from 'axios';

export const GET_BLOG_POSTS = 'GET_BLOG_POSTS';
export const GET_BLOG_POSTS_SUCCESS = 'GET_BLOG_POSTS_SUCCESS';
export const GET_BLOG_POSTS_ERROR = 'GET_BLOG_POSTS_ERROR';

const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({type: GET_BLOG_POSTS_SUCCESS, payload: response.data});
        } catch (err) {
            alert(err);
        }

        // return axios.get('https://jsonplaceholder.typicode.com/posts').then(
        //     response => dispatch({ type: GET_BLOG_POSTS_SUCCESS, payload: response.data }),
        //     err => dispatch({ type: GET_BLOG_POSTS_ERROR, err })
        // );
    };
};

export default getPosts;
