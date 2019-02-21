import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    position: relative;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
`;

export const SearchBarContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 55px;
    background:#353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;
`;

export const SearchBarInput = styled.input`
    font-family: 'Abel', sans-serif;
    font-size: 38px;
    position: absolute;
    left: 70px;
    top: 7px;
    border: 0;
    background: transparent;
    height: 40px;
    color: #fff;
    &:focus {
        outline: none;
    }
`;

  