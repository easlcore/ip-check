import { AnyAction } from 'redux';
import { SET_TEXT } from '../actions/actionTypes';

export const textReducer = (state = '', action: AnyAction): any => {
    switch(action.type) {
        case SET_TEXT:
            return action.payload;
        default:
            return state;
    }
}
