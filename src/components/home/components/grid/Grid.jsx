import React, { Component } from 'react';
import {
    GridWrapper,
    GridCotent,
    GridElement
} from './style';


class Grid extends Component {

    render() {

        const renderElements = () => {
            const gridElements = this.props.children.map( (element, id) => {
              return (
                <GridElement key={id}>
                  {element}
                </GridElement>
              )
            })
            return gridElements;
        }

        return (
            <GridWrapper>
                {this.props.header && !this.props.loading ? <h1>{this.props.header}</h1> : null}
                <GridCotent>
                    {renderElements()}
                </GridCotent>
            </GridWrapper>
        );
    }
}

export default Grid;