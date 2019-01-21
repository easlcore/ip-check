import { AnyAction } from 'redux';
import { GET_INFO } from '../actions/actionTypes';

export const ipInfoReducer = (state = [], action: AnyAction): any => {
    switch(action.type) {
        case GET_INFO:
            return [
                ...state,
                {
                    ...action.payload
                }
            ];
        default:
            return state;
    }
}
