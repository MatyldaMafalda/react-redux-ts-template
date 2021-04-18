import {
	createStore,
	applyMiddleware,
	Store,
	Dispatch,
	AnyAction,
	Middleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer, RootState } from './root-reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [thunk];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
