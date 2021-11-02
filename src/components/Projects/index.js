import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="projects">
            <ServicesH1>Project Highlight</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Peer Mentoring Program</ServicesH2>
                </ServicesCard> 
                <ServicesCard> 
                    <ServicesP>The Peer Mentoring program initiated by the Hartmann’s Community Centre is a one-on one
project in which we aim to connect our experienced peer-mentors with peer mentees in each
of the communities (Dartmouth, Sydney, St. John’s, Amherst, Fredericton, St. Dominion, Canso)
and help them cope with the current pandemic by offering them support and subsidiaries
funded by the Government of Canada (Canada Summer Jobs Initiative).</ServicesP>
                </ServicesCard> 
            </ServicesWrapper>    

        </ServicesContainer>
    )
}

export default Services
