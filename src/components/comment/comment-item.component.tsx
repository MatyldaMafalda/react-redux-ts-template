import React from 'react';
import Comment from '../../types/Comment';

import { CommentContainer } from './comment-item.css';

type CommentProps = {
	comment: Comment;
};

const CommentItem: React.FC<CommentProps> = ({ comment }) => {
	return (
		<CommentContainer>
			<span>&#9993; </span>
			{comment.email.toLowerCase()}
			<p>{comment.body}</p>
		</CommentContainer>
	);
};

export default CommentItem;
