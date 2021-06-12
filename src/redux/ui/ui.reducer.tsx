import { LOADING_START, LOADING_STOP, UiActionTypes } from './ui.types';

interface Loader {
	actions: any[];
}

interface UiState {
	loader: Loader;
}

const initialUiState: UiState = {
	loader: {
		actions: [],
	},
};

const uiReducer = (state = initialUiState, action: UiActionTypes): UiState => {
	const { loader } = state;
	const { actions } = loader;

	switch (action.type) {
		case LOADING_START:
			return {
				...state,
				loader: { ...loader, actions: [...actions, action.payload.action] },
			};
		case LOADING_STOP:
			return {
				...state,
				loader: {
					...loader,
					actions: actions.filter((a) => a.name !== action.payload.action.name),
				},
			};
		default:
			return { ...state };
	}
};

export default uiReducer;
