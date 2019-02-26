import styled from 'styled-components';

export const LoadMoreBtn = styled.div`
    background: #16d47b;
    width: 100%;
    min-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 50px;
    p {
        font-family: 'Abel', sans-serif;
        font-size:42px;
        padding: 20px;
    }
    &:hover {
        opacity: 0.8;
    }
`;