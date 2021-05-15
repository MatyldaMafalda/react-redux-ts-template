import React from 'react';

import NewCommentForm from '../../components/new-comment-form/new-comment-form.component';
import CommentsList from '../../components/comments-list/comments-list.component';

const CommentsPage: React.FC = () => {
	return (
		<>
			<NewCommentForm />
			<CommentsList />
		</>
	);
};

export default CommentsPage;
