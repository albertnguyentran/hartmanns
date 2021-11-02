import React, {useState, useRef, useEffect} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { TextLogo, HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, wrapper } from './HeroElements'
import styled, { css } from 'styled-components/macro'
import { MdSlideshow } from 'react-icons/md'
import { IoMdArrowRoundForward } from 'react-icons/io'
import {IoArrowForward, IoArrowBack } from 'react-icons/io5'
import Rainbowfy from 'react-rainbowfy';

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`

const HeroSlider = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    

    &::before {
        content: '',
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overfolow: hidden;
        opacity: 0.4;

        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%
        )
    }
`

const HeroImage = styled.img`
    
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
    background: #232a34;
    
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: black;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 193, 72, 0.85);
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`
const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Arrow = styled(IoMdArrowRoundForward)``;

const HeroSection = ({ slides, font }) => {


    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {

        if(timeout.current){
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000)

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, 
    [current, length])

    /*<HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>*/

    return (
        <HeroContainer id="home">
            {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index}>
                        {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image}/>
                                    
                            </HeroSlider>    
                        )}
                
                    </HeroSlide>
                )
            })}
            <HeroContent>
                
                <TextLogo>
                    
                    <Rainbowfy fontSize={font}>Hartmann's</Rainbowfy>
                    
                </TextLogo>
                
                <HeroP>
                    
                </HeroP>
                
            
                
            </HeroContent>

            <SliderButtons> 
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </HeroContainer>
    )
}

export default HeroSection;
