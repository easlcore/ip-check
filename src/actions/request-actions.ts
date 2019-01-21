import { AnyAction } from 'redux';
import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from './actionTypes';

export function fetchFailed(): AnyAction {
    return {
        type: FETCH_FAILED
    };
}

export function fetchPending(): AnyAction {
    return {
        type: FETCH_PENDING
    };
}

export function fetchSuccess(): AnyAction {
    return {
        type: FETCH_SUCCESS
    };
}
