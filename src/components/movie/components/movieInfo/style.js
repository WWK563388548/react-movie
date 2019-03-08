import styled, {keyframes} from 'styled-components';

const animateMovieinfo = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const MovieInfoContainer = styled.div`
    background-size: cover !important;
    background-position: center !important;
    width: 100%;
    height: 600px;
    padding: 40px 20px;
    box-sizing: border-box;
    animation: ${animateMovieinfo} 1s;
`;

export const MovieInfoContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    position: relative;
`;

export const MovieInfoThumb = styled.div`
    width: 350px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0px;
`;

export const MovieInfoText = styled.div`

    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    width: auto;
    padding: 40px;
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    left: 360px;
    h1{
        font-size:48px;
        margin: 0;
    }

    h3 {
        font-size: 16px;
        line-height: 0;
        margin-top: 30px;
    }

    p {
        font-size: 18px;
        line-height: 26px;
    }
`;

export const MovieInfoRating = styled.div`
    width: 250px;
    height: 20px;
    margin-top: 20px;
    position: relative;
`;
export const MovieInfoScore = styled.p`
    position: absolute;
    margin: 0;
    right: 0px;
    top: -3px;
`;



