import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/store';
import { loaderCheck } from '../../redux/ui/ui.selectors';
import { fetchCommentsAsync } from '../../redux/comment/comment.actions';

import CommentItem from '../comment/comment-item.component';

const CommentsList: React.FC = () => {
	const dispatch = useDispatch();

	const state = useAppSelector((state) => state);
	const commnets = useAppSelector((state) => state.comment.comments);
	const error = useAppSelector((state) => state.comment.error);

	const loading = loaderCheck(state, 'FETCH_COMMENTS');

	useEffect(() => {
		if (!commnets.length) {
			dispatch(fetchCommentsAsync());
		}
	}, [dispatch]);

	if (loading) return <p>LOADING...</p>;

	if (error) {
		return <p>An error has occured while fetching comments: {error.message}</p>;
	}

	return (
		<>
			<div>
				{commnets.map((comment) => (
					<CommentItem comment={comment} key={comment.id} />
				))}
			</div>
		</>
	);
};

export default CommentsList;
