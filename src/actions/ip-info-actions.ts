import { AnyAction, Dispatch } from 'redux';
import { IIpInfo } from '../interfaces/IIpInfo';
import { GET_INFO } from './actionTypes';
import { fetchFailed, fetchPending, fetchSuccess } from './request-actions';

export function getInfo(data: IIpInfo): AnyAction {
    return {
        type: GET_INFO,
        payload: data
    }
}

export function fetchData(ip: string): Function {
    return function(dispatch: Dispatch) {
        dispatch(fetchPending());

        return fetch(`https://api.2ip.ua/geo.json?ip=${ip}`)
            .then((res: any) => res.json())
            .then((json: IIpInfo) => {
                dispatch(fetchSuccess());
                dispatch(getInfo(json));
            })
            .catch((err: any) => {
                dispatch(fetchFailed());
            })
    }
}
