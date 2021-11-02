import React from 'react'
import {Button} from '../ButtonElements';
import  {Subtitle2, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';


const FAQ = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description2, description3, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper> 
                    <InfoRow imgStart={imgStart}>
                        <Column1> 
                            <TextWrapper> 
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}  </Heading> 
                                
                                <Subtitle darkText={lightText}>{description}</Subtitle>
                                <Subtitle2 darkText={lightText}>{description2}</Subtitle2>
                                <Subtitle2 darkText={lightText}>{description3}</Subtitle2>
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

export default FAQ;
