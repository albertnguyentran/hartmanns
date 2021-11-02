import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
    FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, 
    SocialIconLink} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    let url = "hartmannscentre.com";

    return (
        
        <FooterContainer>
            <FooterWrap>
                

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIconLink href="https://hartmannscentre.com"> 
                            Hartmann's Community Centre
                        </SocialIconLink>
                        <WebsiteRights href="mailto:albertnt905@gmail.com" text-decoration="none"> Website by Albert Nguyen-Tran - All rights reserved - {new Date().getFullYear()}</WebsiteRights>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
