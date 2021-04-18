import { Dispatch } from 'redux';
import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_FAILURE,
	ADD_COMMENT,
	ADD_COMMENT_FAILURE,
	CommentActionTypes,
} from './comment.types';

import { LOADING_START, LOADING_STOP, UiActionTypes } from '../ui/ui.types';

import Comment from '../../types/Comment';

import { commentsAPI } from '../../api/api';

export const fetchCommentsAsync = () => {
	return async (dispatch: Dispatch<CommentActionTypes | UiActionTypes>) => {
		dispatch({
			type: LOADING_START,
			payload: {
				action: {
					name: 'FETCH_COMMENTS',
				},
			},
		});
		try {
			const response: Response = await fetch(`${commentsAPI}?_limit=15`);
			const comments: Comment[] = await response.json();

			dispatch({
				type: FETCH_COMMENTS,
				payload: comments,
			});
		} catch (error) {
			dispatch({
				type: FETCH_COMMENTS_FAILURE,
				payload: error,
			});
		} finally {
			dispatch({
				type: LOADING_STOP,
				payload: {
					action: {
						name: 'FETCH_COMMENTS',
					},
				},
			});
		}
	};
};

export const addCommentAsync = (comment: Comment) => {
	return async (dispatch: Dispatch<CommentActionTypes | UiActionTypes>) => {
		dispatch({
			type: LOADING_START,
			payload: {
				action: {
					name: 'ADD_COMMENT',
				},
			},
		});
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/comments',
				{
					method: 'POST',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(comment),
				}
			);

			const newComment = await response.json();
			dispatch({
				type: ADD_COMMENT,
				payload: newComment,
			});
		} catch (error) {
			dispatch({
				type: ADD_COMMENT_FAILURE,
				payload: error,
			});
		} finally {
			dispatch({
				type: LOADING_STOP,
				payload: {
					action: {
						name: 'ADD_COMMENT',
					},
				},
			});
		}
	};
};
