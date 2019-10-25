import React, { useContext, useReducer } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { AST_Conditional } from 'terser';

const AuthContext = React.createContext();

const initialState = [
  {
    data: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false,
    error: '',
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      state.isAuthenticated = true;
      return {
        ...state,
        ...action.payload,
      };
    case 'AUTH_ERR':
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    // fetch posts
    case 'FETCH_POSTS_START':
      return {
        ...state,
        data: [],
        isFetching: true,
        error: '',
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: '',
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.payload,
      };
    // create post
    case 'CREATE_POST_START':
      return {
        ...state,
        data: [],
        isPosting: true,
        error: '',
      };
    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        data: [action.payload, ...state.data],
        isPosting: false,
        error: '',
      };
    case 'CREATE_POST_FAILURE':
      return {
        ...state,
        data: [],
        isPosting: false,
        error: action.payload,
      };
    // update post
    case 'UPDATE_POST_START':
      return {
        ...state,
        data: [],
        isUpdating: true,
        error: '',
      };
    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        data: state.data.map(post => {if (post.id === action.payload.id) { return action.payload; } else { return post }}),
        isUpdating: false,
        error: '',
      };
    case 'UPDATE_POST_FAILURE':
      return {
        ...state,
        data: [],
        isUpdating: false,
        error: action.payload,
      };
    // delete post
    case 'DELETE_POST_START':
      return {
        ...state,
        data: [],
        isDeleting: true,
        error: '',
      };
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        data: state.data.filter(item=> !(item.id===action.payload.id)),
        isDeleting: false,
        error: '',
      };
    case 'DELETE_POST_FAILURE':
      return {
        ...state,
        data: [],
        isDeleting: false,
        error: action.payload,
      };
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
      // const response = await axios.post('https://reqres.in/api/login', values);
      console.log(response.data);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: 'AUTH_ERR',
        payload: err.response,
      });
    }
  };

  const handleRegister = async values => {
    try {
      // Mocking API post request
      const response = await axiosWithAuth().post('api/users/register', values);
      console.log(response.data);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: 'AUTH_ERR',
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
        handleRegister,
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
      console.log('Fetch success:', response.data);
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
    })
    .catch(error => {
      console.log(error.message);
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    });
};

export const createPost = post => dispatch => {
  dispatch({ type: 'CREATE_POST_START' });
  post = {...post, title: post.contents}
  console.log(post)
  axiosWithAuth()
    .post(`/api/posts`, post)
    .then(response => {
      console.log(response);
      // dispatch({ type: 'CREATE_POST_SUCCESS', payload: response.data });
    })
    .catch(error => {
      console.log(error.message);
      dispatch({ type: 'CREATE_POST_FAILURE', payload: error.message });
    });
};

export const updatePost = post => dispatch => {
  dispatch({ type: 'UPDATE_POST_START' });
  axiosWithAuth()
    .put(`/api/posts/${post.id}`, post)
    .then(response => {
      console.log(response);
      dispatch({ type: 'UPDATE_POST_SUCCESS', payload: response.data });
    })
    .catch(error => {
      console.log(error.message);
      dispatch({ type: 'UPDATE_POST_FAILURE', payload: error.message });
    });
};

export const deletePost = id => dispatch => {
  console.log("Delete dispatched")
  dispatch({ type: 'DELETE_POST_START' });
  axiosWithAuth()
    .delete(`/api/posts/${id}`)
    .then(response => {
      console.log(response);
      dispatch({ type: 'DELETE_POST_SUCCESS', payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: 'DELETE_POST_FAILURE', payload: error.message });
    });
};


const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
