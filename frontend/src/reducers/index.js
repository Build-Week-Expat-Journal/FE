import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    UPDATE_POST_START,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE
    } from '../actions/';

const initialState = [{
    data: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}];

const postReducer = (state = initialState, action) => {
    switch(action.type) {

        // fetch posts
        case FETCH_POSTS_START:
            return {...state, data: [], isFetching: true, isPosting: false, isUpdating: false, isDeleting: false, error: ''}
        case FETCH_POSTS_SUCCESS:
            return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''}
        case FETCH_POSTS_FAILURE:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload}

        // create post
        case CREATE_POST_START:
            return {...state, data: [], isFetching: false, isPosting: true, isUpdating: false, isDeleting: false, error: ''};
        case CREATE_POST_SUCCESS:
            return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
        case CREATE_POST_FAILURE:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};

        // update post
        case UPDATE_POST_START:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: true, isDeleting: false, error: ''};
        case UPDATE_POST_SUCCESS:
            return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
        case UPDATE_POST_FAILURE:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};

        // delete post
        case DELETE_POST_START:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: true, error: ''};
        case DELETE_POST_SUCCESS:
            return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
        case DELETE_POST_FAILURE:
            return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};

        // default statement
        default: 
        return state;
    }
}

export default postReducer;