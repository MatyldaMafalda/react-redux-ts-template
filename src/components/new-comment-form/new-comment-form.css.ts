import styled from 'styled-components';
import palette from '../../styles/palette.css';
import media from '../../styles/media-queries.css';

export const FormContainer = styled.div`
	padding: 3rem 3rem 1rem 3rem;
`;

export const NameAndEmailGroup = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		width: 45%;
	}

	${media.phone} {
		flex-direction: column;
		div {
			width: 100%;
		}
	}
`;

export const ErrorMsg = styled.span`
	font-size: 14px;
	color: red;
`;

export const FormGroup = styled.div`
	display: flex;
	margin-bottom: 1rem;
	flex-wrap: wrap;
	align-items: baseline;

	label {
		min-width: 100px;
	}

	input,
	textarea {
		width: 100%;
		min-height: 25px;
		border: solid 1px ${palette.mediumGrey};
		border-radius: 10px;
		background: white;
		outline-color: ${palette.darkGrey};
	}

	${media.phone} {
		flex-direction: column;
	}
`;

export const Submit = styled.input.attrs({
	type: 'submit',
	value: 'Submit',
})`
	background: ${palette.darkGrey};
	color: #fff;
	cursor: pointer;
	height: 35px;
	width: 80px;
	border-color: transparent;
	outline: none;
	transition: 0.15s;
	text-align: center;
	&:active {
		background-color: ${palette.lightGrey200};
	}
`;
