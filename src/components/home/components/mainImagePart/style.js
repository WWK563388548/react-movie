import styled, {keyframes} from 'styled-components';

const animateHeroimage = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

export const MainImageWrapper = styled.div`
    background-size: 100%, cover !important;
    background-position: center, center !important;
    width: 100%;
    height: 600px;
    position: relative;
    animation: ${animateHeroimage} 1s;
    background: linear-gradient(
        to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%),
        url(${(props) => props.image}), #1c1c1c;
`;

export const MainImageContent = styled.div`
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
`;

export const MainImageText = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0.0);
    color: #fff;
    h1 {
        font-family: 'Abel', sans-serif;
        font-size:48px;
        color: #fff;
    }
    p {
        font-family: 'Abel', sans-serif;
        font-size: 22px;
        line-height: 26px;
        color: #fff;
    }
`;