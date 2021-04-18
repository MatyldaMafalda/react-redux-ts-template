import { Route, Switch } from 'react-router-dom';
import React from 'react';

import CommentsPage from './pages/comments-page.component';
import Homepage from './pages/homepage.component';
import Header from './components/header/header.component';

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/comments" component={CommentsPage} />
			</Switch>
		</div>
	);
};
