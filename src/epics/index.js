import 'rxjs';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {combineEpics} from 'redux-observable';
import {mergeMap, catchError}  from 'rxjs/operators';

import {GET_BLOG_POSTS, GET_BLOG_POSTS_SUCCESS, GET_BLOG_POSTS_ERROR} from '../actions';

const getBlogPosts = (action$) =>
    action$.ofType(GET_BLOG_POSTS).pipe(
        mergeMap(() =>
            ajax({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).pipe(
                 mergeMap(e => of({type: GET_BLOG_POSTS_SUCCESS, payload: e.response})),
                 catchError(e => of({type: GET_BLOG_POSTS_ERROR, payload: e}))
            )
        )
    );


export default combineEpics(getBlogPosts);
