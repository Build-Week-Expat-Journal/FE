import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const CREATE_POST_START = "CREATE_POST_START";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const UPDATE_POST_START = "UPDATE_POST_START";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const getPosts = () => dispatch => {
    dispatch({ type: FETCH_POSTS_START });
    axiosWithAuth()
    .get('/api/posts')
    .then(response => {
        console.log("Fetch success:", response.data)
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
        console.log(error.message);
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    })
}

export const createPost = post => dispatch => {
    dispatch({ type: CREATE_POST_START });
    axiosWithAuth()
    .post(`/api/posts`, post)
    .then(response => {
        console.log(response);
        dispatch({ type: CREATE_POST_SUCCESS, payload: response.data })
    })
    .catch(error => {
        console.log(error.message);
        dispatch({ type: CREATE_POST_FAILURE, payload: error })
    })
}