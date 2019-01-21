import { IIpInfo } from './IIpInfo';

export interface IState {
    text: string;
    ipInfo: IIpInfo[];
    requestStatus: {
        status: 'success' | 'pending' | 'failed';
    }
}
