import { RootState } from '../root-reducer';
import UiAction from '../../types/UiAction';

export const loaderCheck = (state: RootState, ...actionsToCheck: string[]) =>
	state.ui.loader.actions.some((action: UiAction) =>
		actionsToCheck.includes(action.name)
	);
