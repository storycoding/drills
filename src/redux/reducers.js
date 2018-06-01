import { SET_TEXT } from './actions';

const DEFAULT_STATE = {
	text: ""
}

const setText = (state, action) => {
	return Object.assign({}, state, { text: action.payload });
}

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SET_TEXT:
			return setText(state, action);

		default:
			return state;
	} 
}

export default rootReducer;