import styled from 'styled-components';
import palette from '../../styles/palette.css';

export const CommentContainer = styled.div`
	margin-bottom: 1rem;
	padding: 1rem;
	border-radius: 20px;
	background: white;
	opacity: 0.7;
	transition: 0.5s;
	-webkit-box-shadow: 0px 0px 12px -1px ${palette.mediumGrey};
	box-shadow: 0px 0px 12px -1px ${palette.mediumGrey};

	&:hover {
		opacity: 1;
	}

	p:first-letter {
		text-transform: uppercase;
	}

	span {
		font-size: 22px;
	}
`;
