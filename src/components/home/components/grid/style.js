import styled, {keyframes} from 'styled-components';

export const GridWrapper = styled.div`
    h1 {
        font-family: 'Abel', sans-serif;
        font-size:42px;
    }
`;

export const GridCotent= styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

const animateGrid = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

export const GridElement= styled.div`
    margin: 0 40px 40px 0;
    background: #353535;
    max-height: 430px;
    animation: ${animateGrid} 0.5s;
    overflow: hidden;
    &:nth-child(4n+4) {
        margin-right: 0;
    }
`;