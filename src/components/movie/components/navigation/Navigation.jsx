import React, {Component} from 'react';
import {NavigationContainer, NavigationContent} from './style';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavigationContent>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <p>/</p>
                    <p>{this.props.movie}</p>
                </NavigationContent>
            </NavigationContainer>
        );
    }
}

export default Navigation;