import React from 'react';
import { IIpInfo } from '../../interfaces/IIpInfo';
import './ip-info.css';

interface IIpInfoProps {
    data: IIpInfo;
}

export const IpInfo: React.SFC<IIpInfoProps> = ({ data }) => (
    <div className="ip-info">
        <p>
            ip: {data.ip}
        </p>
        <p>
            country code: {data.country_code}
        </p>
        <p>
            country: {data.country}
        </p>
        <p>
            country rus: {data.country_rus}
        </p>
        <p>
            region: {data.region}
        </p>
        <p>
            region rus: {data.region_rus}
        </p>
        <p>
            city: {data.city}
        </p>
        <p>
            city rus: {data.city_rus}
        </p>
        <p>
            zip code: {data.zip_code}
        </p>
        <p>
            time zone: {data.time_zone}
        </p>
        {data.latitude &&
            <p>
                latitude: {data.latitude}
            </p>
        }
        {data.longitude &&
            <p>
                longitude: {data.longitude}
            </p>
        }
    </div>
);
