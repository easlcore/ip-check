import { AnyAction } from 'redux';
import { FETCH_PENDING, FETCH_FAILED, FETCH_SUCCESS } from '../actions/actionTypes';

const initialState = {
    status: 'success'
}

export const requestStatusReducer = (state = initialState, action: AnyAction): any => {
    switch(action.type) {
        case FETCH_PENDING:
            return {
                status: 'pending'
            };
        case FETCH_FAILED:
            return {
                status: 'failed'
            };
        case FETCH_SUCCESS:
            return {
                status: 'success'
            };
        default:
            return state;
    }
}
