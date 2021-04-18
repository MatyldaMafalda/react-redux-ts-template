import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_FAILURE,
	ADD_COMMENT,
	ADD_COMMENT_FAILURE,
	CommentActionTypes,
} from './comment.types';

import Comment from '../../types/Comment';

interface CommentState {
	comments: Comment[];
	error: Error | null;
}

const initialCommentState: CommentState = {
	comments: [],
	error: null,
};

const commentReducer = (
	state = initialCommentState,
	action: CommentActionTypes
): CommentState => {
	switch (action.type) {
		case FETCH_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.payload],
			};

		case FETCH_COMMENTS_FAILURE:
		case ADD_COMMENT_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return { ...state };
	}
};

export default commentReducer;
