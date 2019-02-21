import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    SearchBarWrapper,
    SearchBarContent,
    SearchBarInput,    
} from './style';


class SearchBar extends Component {
    timeout = null;
    state = {
        value: '',
    }

    doSearch = (event) => {
        this.setState({value: event.target.value});
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {
        return (
            <SearchBarWrapper>
                <SearchBarContent>
                    <FontAwesomeIcon 
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '12px',
                            color: '#fff',
                        }} 
                        icon="search" 
                        size="2x"
                    />
                    <SearchBarInput value={this.state.value} onChange={this.doSearch} type="text" placeholder="Search" />
                </SearchBarContent>
            </SearchBarWrapper>
        );
    }
}

export default SearchBar;