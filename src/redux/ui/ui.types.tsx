//import Loader from '../../interfaces/Loader';
export const LOADING_START = 'LOADING_START';
export const LOADING_STOP = 'LOADING_STOP';

interface LoadingStartAction {
	type: typeof LOADING_START;
	payload: {
		action: {
			name: string;
		};
	};
}

interface LoadingStopAction {
	type: typeof LOADING_STOP;
	payload: {
		action: {
			name: string;
		};
	};
}

export type UiActionTypes = LoadingStartAction | LoadingStopAction;
