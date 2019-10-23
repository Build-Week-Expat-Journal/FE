import React, { useContext, useReducer } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AuthContext = React.createContext();

const initialState = [{
  data: [],
  isFetching: false,
  isPosting: false,
  isUpdating: false,
  isDeleting: false,
  error: ''
}];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGIN_ERR':
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    // fetch posts
    case 'FETCH_POSTS_START':
      return {...state, data: [], isFetching: true, isPosting: false, isUpdating: false, isDeleting: false, error: ''}
    case 'FETCH_POSTS_SUCCESS':
      return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''}
    case 'FETCH_POSTS_FAILURE':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload}
    // create post
    case 'CREATE_POST_START':
      return {...state, data: [], isFetching: false, isPosting: true, isUpdating: false, isDeleting: false, error: ''};
    case 'CREATE_POST_SUCCESS':
      return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
    case 'CREATE_POST_FAILURE':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};
    // update post
    case 'UPDATE_POST_START':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: true, isDeleting: false, error: ''};
    case 'UPDATE_POST_SUCCESS':
      return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
    case 'UPDATE_POST_FAILURE':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};
    // delete post
    case 'DELETE_POST_START':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: true, error: ''};
    case 'DELETE_POST_SUCCESS':
      return {...state, data: action.payload, isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: ''};
    case 'DELETE_POST_FAILURE':
      return {...state, data: [], isFetching: false, isPosting: false, isUpdating: false, isDeleting: false, error: action.payload};
    // default
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token') || null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async values => {
    try {
      // Mocking API post request
      const response = await axiosWithAuth().post('api/users/login', values);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: 'LOGIN_ERR',
        payload: err.response,
      });
    }
  };

  const handleLogout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const getPosts = () => dispatch => {
  dispatch({ type: 'FETCH_POSTS_START' });
  axiosWithAuth()
  .get('/api/posts')
  .then(response => {
      console.log("Fetch success:", response.data)
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  })
  .catch(error => {
      console.log(error.message);
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  })
}

export const createPost = post => dispatch => {
  dispatch({ type: 'CREATE_POST_START' });
  axiosWithAuth()
  .post(`/api/posts`, post)
  .then(response => {
      console.log(response);
      dispatch({ type: 'CREATE_POST_SUCCESS', payload: response.data })
  })
  .catch(error => {
      console.log(error.message);
      dispatch({ type: 'CREATE_POST_FAILURE', payload: error.message })
  })
}

export const updatePost = post => dispatch => {
  dispatch({ type: 'UPDATE_POST_START' });
  axiosWithAuth()
  .put(`/api/posts/${post.id}`, post)
  .then(response => {
      console.log(response)
      dispatch({ type: 'UPDATE_POST_SUCCESS', payload: response.data })
  })
  .catch(error => {
      console.log(error.message);
      dispatch({ type: 'UPDATE_POST_FAILURE', payload: error.message });
  })
}

export const deletePost = id => dispatch => {
  dispatch({ type: 'DELETE_POST_START' });
  axiosWithAuth()
  .delete(`/api/posts/${id}`)
  .then(response => {
      console.log(response);
      dispatch({ type: 'DELETE_POST_SUCCESS', payload: response.data })
  })
  .catch(error => {
      console.log(error);
      dispatch({ type: 'DELETE_POST_FAILURE', payload: error.message })
  })
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
