import React from 'react';
import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './CareerElements'

const Careers = () => {
    return (
        <ServicesContainer id="careers">
            <ServicesH1>Careers</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to="/careers">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Social Programs Admin</ServicesH2>
                    <ServicesP>Assist local government in development of social programs</ServicesP>
                </ServicesCard>

                <ServicesCard to="/careers">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Live-in caregiver-seniors</ServicesH2>
                    <ServicesP>Offering non-medical services to seniors living at home</ServicesP>
                </ServicesCard>

                <ServicesCard to="/careers">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Management Consultant</ServicesH2>
                    <ServicesP>Help organize businesses and their operations to perform optimally</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Careers
