import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import getPosts from '../actions';
import {GET_BLOG_POSTS} from '../../actions';

require('./style.less');

const Blog = ({posts, getBlogPosts}) => {

    const onBtnClick = () => {
        getBlogPosts();
    };

    return (
        <div className="blog-component">
            {
                posts.map((post, index) => {
                    return (
                        <div key={index}>{post.title}</div>
                    );
                })
            }
            <button onClick={onBtnClick}>
                Update
            </button>
        </div>
    )
};

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
    getBlogPosts: PropTypes.func.isRequired
};

Blog.defaultProps = {
    posts: []
};

export const mapStateToProps = (state) => ({
    posts: state.posts
});

// export const mapDispatchToProps = (dispatch) => ({
//     getPosts: () => dispatch(getPosts())
// });

export const mapDispatchToProps = (dispatch) => {
    return {
        getBlogPosts: () => dispatch({type: GET_BLOG_POSTS})
    };
};

// export default connect(mapStateToProps, {getPosts})(Blog);
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
