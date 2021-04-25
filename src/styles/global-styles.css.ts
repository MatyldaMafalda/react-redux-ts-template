import { createGlobalStyle } from 'styled-components';
import palette from './palette.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
	box-sizing: border-box;
	font-family: 'Nunito', sans-serif;
    background: ${palette.lightGrey};

  }
`;

export default GlobalStyle;
