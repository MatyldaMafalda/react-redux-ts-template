import styled from 'styled-components';
import palette from '../../styles/palette.css';

export const Spinner = styled.svg`
	animation: rotate 1s linear infinite;
	display: block;
	margin: 20px auto;
	width: 50px;
	height: 50px;

	& .path {
		stroke: ${palette.darkGrey};
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`;
