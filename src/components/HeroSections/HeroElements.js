import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    rgba(0,0,0,0.89);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;

    

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%, 
                rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);

        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    z-index: 2;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const TextLogo = styled.div`
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.85);
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    z-index: 1;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        transform: scale(1.05);
    }
`

export const wrapper = styled.div`
    height: 100%;
    width: 100%;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 1800%;
    
    -webkit-animation: rainbow 18s ease infinite;
    -z-animation: rainbow 18s ease infinite;
    -o-animation: rainbow 18s ease infinite;
    animation: rainbow 18s ease infinite;
`
 