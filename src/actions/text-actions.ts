import { AnyAction } from 'redux';
import { SET_TEXT } from './actionTypes';

export function setText(text: string): AnyAction {
    return {
        type: SET_TEXT,
        payload: text
    }
}
