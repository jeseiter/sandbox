import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {GET_BLOG_POSTS, GET_BLOG_POSTS_SUCCESS, GET_BLOG_POSTS_ERROR} from '../actions';

const getBlogPostsApi = () => axios.get('https://jsonplaceholder.typicode.com/posts');

// worker Saga: will be fired on GET_BLOG_POSTS action
function* onGetBlogPosts() {

    try {
        const response = yield call(getBlogPostsApi);
        yield put({type: GET_BLOG_POSTS_SUCCESS, payload: response.data});
    } catch (e) {
        yield put({type: GET_BLOG_POSTS_ERROR, message: e.message});
    }
}

// Starts onGetBlogPosts on each dispatched GET_BLOG_POSTS action
function* mySaga() {
    yield takeEvery(GET_BLOG_POSTS, onGetBlogPosts);
}

export default mySaga;
