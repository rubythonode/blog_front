import { asyncState, transformToArray, handleAsyncActions } from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import { createReducer } from 'typesafe-actions';
import { getPostsListAsync, postAsync, GET_POSTS_LIST, GET_POSTS_LIST_SUCCESS, GET_POSTS_LIST_ERROR, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR } from './actions';
import { combineReducers } from 'redux';

const initialState: PostState = {
	postsList: asyncState.initial(),
	reqPost: asyncState.initial()
};
const test = createReducer<PostState, PostActions>(initialState, {
	[GET_POSTS_LIST]: state => ({
    ...state,
    postsList: asyncState.loading()
  }),
  [GET_POSTS_LIST_SUCCESS]: (state, action) => ({
    ...state,
    postsList: asyncState.success(action.payload)
  }),
  [GET_POSTS_LIST_ERROR]: (state, action) => ({
    ...state,
    postsList: asyncState.error(action.payload)
  }),
	[UPDATE_POST]: state => ({
    ...state,
    reqPost: asyncState.loading()
  }),
  [UPDATE_POST_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: asyncState.success(action.payload)
  }),
  [UPDATE_POST_ERROR]: (state, action) => ({
    ...state,
    userProfile: asyncState.error(action.payload)
  })
})

const post = createReducer<PostState, PostActions>(initialState).handleAction(
	transformToArray(getPostsListAsync),
	handleAsyncActions(getPostsListAsync, 'postsList')
);

export default post;
