import React from 'react';
import Comment from '../../types/Comment';

type CommentProps = {
	comment: Comment;
};

const CommentItem: React.FC<CommentProps> = ({ comment }) => {
	return <div>{comment.name}</div>;
};

export default CommentItem;
