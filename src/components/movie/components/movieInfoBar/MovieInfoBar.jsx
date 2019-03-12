import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMoneyBillWave, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import {
    InfoBarContainer, InfoBarContent, InfoBarContentColumn
} from './style';
library.add(faClock);
library.add(faMoneyBillWave);
library.add(faHandHoldingUsd);

const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
}

const convertMoney = (money) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
}

class MovieInfoBar extends Component {

    
    render() {
        return (
            <InfoBarContainer>
                <InfoBarContent>
                    <InfoBarContentColumn>
                        <FontAwesomeIcon 
                            style={{
                                float: "left",
                                marginTop: "-4px"
                            }}
                            icon="clock"
                            size="2x"
                        />
                        <span 
                            style={{
                                padding: "5px 0 0 10px",
                                float: "left",
                            }}
                        >
                            Running Time: {calcTime(this.props.time)}
                        </span>
                    </InfoBarContentColumn>
                    <InfoBarContentColumn>
                        <FontAwesomeIcon 
                            style={{
                                float: "left",
                                marginTop: "-4px"
                            }}
                            icon="money-bill-wave"
                            size="2x"
                        />
                        <span 
                            style={{
                                padding: "5px 0 0 10px",
                                float: "left",
                            }}
                        >
                            Budget: {convertMoney(this.props.budget)}
                        </span>
                    </InfoBarContentColumn>
                    <InfoBarContentColumn>
                        <FontAwesomeIcon 
                            style={{
                                float: "left",
                                marginTop: "-4px"
                            }}
                            icon="hand-holding-usd"
                            size="2x"
                        />
                        <span 
                            style={{
                                padding: "5px 0 0 10px",
                                float: "left",
                            }}
                        >
                            Revenue: {convertMoney(this.props.revenue)}
                        </span>
                    </InfoBarContentColumn>
                </InfoBarContent>
            </InfoBarContainer>
        );
    }
}

export default MovieInfoBar;