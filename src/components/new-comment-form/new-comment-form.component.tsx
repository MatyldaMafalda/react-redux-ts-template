import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addCommentAsync } from '../../redux/comment/comment.actions';
import { RootState } from '../../redux/root-reducer';
import { loaderCheck } from '../../redux/ui/ui.selectors';

type FormData = {
	name: string;
	email: string;
	body: string;
};

const NewCommentForm: React.FC = () => {
	const dispatch = useDispatch();

	const state = useSelector((state: RootState) => state);
	const loading = loaderCheck(state, 'ADD_COMMENT');

	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onChange',
	});

	const onSubmit = async (data: FormData) => {
		dispatch(
			addCommentAsync({
				postId: 1,
				id: 3,
				name: data.name,
				email: data.email,
				body: data.body,
			})
		);
		reset();
	};
	if (loading) {
		return <p>loading...</p>;
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				Name:
				<input
					name="name"
					ref={register({
						required: true,
						minLength: 3,
						pattern: /^[a-zA-Z\s]*$/,
					})}
				/>
				{errors.name && 'Name is required'}
				<br />
				E-mail:
				<input type="email" name="email" ref={register({ required: true })} />
				{errors.email && 'Email is required'}
				<br />
				Comment:
				<textarea
					name="body"
					ref={register({ required: true, minLength: 2, maxLength: 500 })}
				/>
				{errors.body && 'Comment is required'}
				<br />
				<br />
				<input type="submit" />
			</form>
		</>
	);
};
export default NewCommentForm;
