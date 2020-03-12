import { updateKey } from './loginAsync/types';
import { createAction, ActionType, createReducer } from 'typesafe-actions';

const INPUT_VALUE = 'post/INPUT_VALUE';
const RESET_INPUT_VALUE = 'post/RESET_INPUT_VALUE';
export const getValue = createAction(INPUT_VALUE, ({ name, value }: updateKey) => ({
	name,
	value
}))<updateKey>();

export const resetInputValue = createAction(RESET_INPUT_VALUE)<null>();

const actions = {
	getValue,
	resetInputValue
};

export type PostActions = ActionType<typeof actions>;

export type PostWrite = {
	title: string;
	inputValue: string;
	mdValue: string;
	imgUrl: string | null;
};

export type PostState = {
	postWrite: PostWrite;
};

const initialState: PostState = {
	postWrite: {
		title: '',
		inputValue: '',
		mdValue: '',
		imgUrl: null
	}
};

const post = createReducer<PostState, PostActions>(initialState, {
	[RESET_INPUT_VALUE]: (state, action) => {
		return {
			...state,
			postWrite: {
				title: '',
				inputValue: '',
				mdValue: '',
				imgUrl: null
			}
		};
	},
	[INPUT_VALUE]: (state, { payload: { name, value } }) => {
		return {
			...state,
			postWrite: {
				...state.postWrite,
				[name]: value
			}
		};
	}
});

export default post;
