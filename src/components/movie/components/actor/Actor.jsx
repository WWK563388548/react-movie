import React, {Component} from 'react';
import {
    ActorContainer
} from './style';
import NoImage from '../../../home/no_image.jpg';

class Actor extends Component {
    render() {
        const POSTER_SIZE = "w154";
        const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
        return (
            <ActorContainer>
                <img 
                    src={this.props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${this.props.actor.profile_path}` : NoImage}
                    alt="actorthumb"
                />
                <span className="actor-name">{this.props.actor.name}</span>
                <span className="actor-charactor">{this.props.actor.character}</span>
            </ActorContainer>
        );
    }
}

export default Actor;