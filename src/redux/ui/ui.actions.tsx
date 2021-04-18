import { Dispatch } from 'redux';
import { LOADING_START, LOADING_STOP, UiActionTypes } from './ui.types';

export const startLoading = (name: string, params: any[]) => {
	return (dispatch: Dispatch<UiActionTypes>) => {
		dispatch({
			type: LOADING_START,
			payload: {
				action: {
					name,
				},
			},
		});
	};
};

export const stopLoading = (name: string) => {
	return (dispatch: Dispatch<UiActionTypes>) => {
		dispatch({
			type: LOADING_STOP,
			payload: {
				action: {
					name,
				},
			},
		});
	};
};
