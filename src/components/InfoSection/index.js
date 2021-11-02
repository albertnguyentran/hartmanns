import React, { Component } from 'react';
import {Button, Button1} from '../ButtonElements';
import  {Maps, ButtonsWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {MapContainer} from './map.js'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper> 
                    <InfoRow imgStart={imgStart}>
                        <Column1> 
                            <TextWrapper> 
                            
                                
                                <Heading lightText={lightText}>{headline}</Heading>
                                <TopLine>Milton, Ontario Canada</TopLine>
                                <Subtitle darkText={darkText}>{description}</Subtitle>

                                <ButtonsWrap>
                                    <BtnWrap> 
                                        <Button href="https://hartmannscentre.com" target="_blank" aria-label="Hartmann's Community Centre"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        >{buttonLabel}</Button>
                                    </BtnWrap>
                                    <BtnWrap> 
                                        <Button href="https://www.facebook.com/pg/hartmannscommunitycentre" target="_blank" aria-label="Hartmann's Community Centre"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        
                                        ><FaTwitter/></Button>
                                    </BtnWrap>
                                    <BtnWrap> 
                                        <Button href="https://twitter.com/centrehartmann?lang=en" target="_blank" aria-label="Hartmann's Community Centre"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        
                                        ><FaFacebook/></Button>
                                    </BtnWrap>

                                </ButtonsWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2> 
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    );
};

export default InfoSection;
