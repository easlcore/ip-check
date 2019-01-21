import React, { Component } from 'react';
import { IpInfo } from './components/ip-info/IpInfo';
import { connect } from 'react-redux';
import { setText } from './actions/text-actions';
import { fetchData } from './actions/ip-info-actions';
import logo from './logo.svg';
import './App.css';
import { IState } from './interfaces/IState';
import { IIpInfo } from './interfaces/IIpInfo';

class AppFn extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFetchInfo = this.handleFetchInfo.bind(this);
    }

    public handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.setText(e.target.value);
    }

    public handleFetchInfo() {
        this.props.fetchData(this.props.text);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Ip info App
                    </p>
                </header>
                <div className="ip-info-search">
                    <input
                        onChange={this.handleTextChange}
                        value={this.props.text}
                        type="text"
                        className="ip-info-search__field"
                    />
                    <button
                        className="ip-info-search__button"
                        onClick={this.handleFetchInfo}
                    >
                        Получить информацию
                    </button>
                </div>
                {this.props.requestStatus.status === 'failed' &&
                    <div className="ip-info__error">
                        Произошла ошибка :( Проверьте валидность введеного IP
                    </div>
                }
                <div className="ip-info-list">
                    {this.props.ipInfo.map((data: IIpInfo, index: number) => (
                        <IpInfo key={index} data={data} />
                    ))}
                </div>
            </div>
        );
    }
}

export const App = connect(
    (state: IState) => ({
        text: state.text,
        ipInfo: state.ipInfo,
        requestStatus: state.requestStatus
    }),
    {
        setText,
        fetchData
    }
)(AppFn)
