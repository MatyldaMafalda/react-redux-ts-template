import styled from 'styled-components';
import palette from '../../styles/palette.css';
import media from '../../styles/media-queries.css';

export const activeStyle = {
	background: palette.darkGrey,
	color: palette.lightGrey,
} as React.CSSProperties;

export const Navigation = styled.nav`
	background: ${palette.lightGrey200};
	display: flex;
	padding: 0;
	margin: 0 auto;
	list-style: none;
	list-style-type: none;
    text-align: center;

		a {
			width: 50%;
            padding: 1rem;
            text-decoration: none;
            color: ${palette.darkGrey};

            ${media.phone} {
                width: 100%;
            }

			&:hover {
				background: ${palette.darkGrey};
                color: ${palette.lightGrey};
			}
		}

        ${media.phone} {
            flex-direction: column;
        }
	}
`;
