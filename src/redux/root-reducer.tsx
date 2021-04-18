import { combineReducers } from 'redux';
import commentReducer from './comment/comment.reducer';
import uiReducer from './ui/ui.reducer';

export const rootReducer = combineReducers({
	comment: commentReducer,
	ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
