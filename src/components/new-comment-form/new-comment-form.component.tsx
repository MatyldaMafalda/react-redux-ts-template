import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addCommentAsync } from '../../redux/comment/comment.actions';
import { RootState } from '../../redux/root-reducer';
import { loaderCheck } from '../../redux/ui/ui.selectors';

import {
	FormContainer,
	Submit,
	FormGroup,
	ErrorMsg,
	NameAndEmailGroup,
} from './new-comment-form.css';
import { Spinner } from '../spinner/spinner.css';

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

	const onSubmit = (data: FormData) => {
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
		return (
			<Spinner viewBox="0 0 50 50">
				<circle
					className="path"
					cx="25"
					cy="25"
					r="20"
					fill="none"
					strokeWidth="3"
				/>
			</Spinner>
		);
	}
	return (
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<NameAndEmailGroup>
					<FormGroup>
						<label htmlFor="name">Name:</label>
						<input
							name="name"
							ref={register({
								required: true,
								minLength: 3,
								pattern: /^[a-zA-Z\s]*$/,
							})}
						/>

						<ErrorMsg>{errors.name && 'Name is required.'}</ErrorMsg>
					</FormGroup>

					<FormGroup>
						<label htmlFor="email">E-mail:</label>
						<input
							type="email"
							name="email"
							ref={register({ required: true })}
						/>
						<ErrorMsg>{errors.email && 'Email is required.'}</ErrorMsg>
					</FormGroup>
				</NameAndEmailGroup>
				<FormGroup>
					<label htmlFor="body">Comment:</label>
					<textarea
						name="body"
						ref={register({ required: true, minLength: 2, maxLength: 500 })}
					/>
					<ErrorMsg>{errors.body && 'Comment is required.'}</ErrorMsg>
				</FormGroup>

				<Submit type="submit" value="Submit" />
			</form>
		</FormContainer>
	);
};
export default NewCommentForm;
