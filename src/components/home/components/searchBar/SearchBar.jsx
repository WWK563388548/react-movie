import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    SearchBarWrapper,
    SearchBarContent,
    SearchBarInput,    
} from './style';

library.add(faSearch);
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
                        icon={["fas", "search"]}
                        size="2x"
                    />
                    <SearchBarInput value={this.state.value} onChange={this.doSearch} type="text" placeholder="Search" />
                </SearchBarContent>
            </SearchBarWrapper>
        );
    }
}

export default SearchBar;