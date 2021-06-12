import Comment from '../../types/Comment';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

interface FetchCommentsAction {
	type: typeof FETCH_COMMENTS;
	payload: Comment[];
}

interface FetchCommentsFailureAction {
	type: typeof FETCH_COMMENTS_FAILURE;
	payload: Error;
}

interface AddCommentAction {
	type: typeof ADD_COMMENT;
	payload: Comment;
}

interface AddCommentFailureAction {
	type: typeof ADD_COMMENT_FAILURE;
	payload: Error;
}

export type CommentActionTypes =
	| FetchCommentsAction
	| FetchCommentsFailureAction
	| AddCommentAction
	| AddCommentFailureAction;
